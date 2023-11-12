import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
// import wisatapoint from "../../data/poi-fasil.geojson"
import { Button } from "react-bootstrap";

// CSS
import "./DirectionMap.css";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_KEY;

const DirectionMap = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const directionsControl = useRef(null);
  const [lng, setLng] = useState(106.827);
  const [lat, setLat] = useState(-6.175);
  const [zoom, setZoom] = useState(10);
  const [basemap, setBasemap] = useState("dawn");
  const [isDirectionActive, setIsDirectionActive] = useState(true);

  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      // style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      zoom: zoom,
      pitch: 15,
    });

    // AKTIVASI STYLE MAPBOX STANDARD
    map.current.on("style.load", () => {
      map.current.setConfigProperty("basemap", "lightPreset", basemap);
    });

    map.current.addControl(new mapboxgl.NavigationControl());
    map.current.addControl(new mapboxgl.FullscreenControl());
    map.current.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
      })
    );
    if (isDirectionActive) {
      directionsControl.current = new MapboxDirections({
        accessToken: mapboxgl.accessToken,
        unit: "metric",
      });
      map.current.addControl(directionsControl.current, "top-left");
    } else {
      if (directionsControl.current) {
        map.current.removeControl(directionsControl.current);
      }
    }
  }, [basemap]);

  // SETTING FITUR NAVIGATION
  useEffect(() => {
    if (!map.current) return;

    if (isDirectionActive) {
      if (!directionsControl.current) {
        directionsControl.current = new MapboxDirections({
          accessToken: mapboxgl.accessToken,
          unit: "metric",
        });
        map.current.addControl(directionsControl.current, "top-left");
      }
    } else {
      if (directionsControl.current) {
        map.current.removeControl(directionsControl.current);
        directionsControl.current = null;
      }
    }
  }, [isDirectionActive]);

  const toggleDirection = () => {
    setIsDirectionActive(!isDirectionActive);
  };

  // MAP ADD LAYER
  useEffect(() => {
    map.current.on("load", () => {
      map.current.addSource("wisata", {
        type: "vector",
        // Use a URL for the value for the `data` property.
        url: "mapbox://yakubhariana70.clok3ic7o2rfb2hrwtlimqvlk-5k1gm",
      });

      map.current.addLayer({
        id: "wisata-layer",
        slot: "top",
        type: "circle",
        source: "wisata",
        "source-layer": "JakSpace_-_Lokasi_Wisata",
        layout: {
          // Make the layer visible by default.
          visibility: "visible",
        },
        paint: {
          "circle-radius": 4,
          "circle-stroke-width": 1,
          "circle-color": "limegreen",
          "circle-stroke-color": "white",
        },
      });

      map.current.addSource("route", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              properties: {},
              geometry: {
                coordinates: [
                  [106.82009446870347, -6.164727725704196],
                  [106.82172887667497, -6.171227512341147],
                  [106.8233632846464, -6.171655127089267],
                  [106.822933177285, -6.190897433199169],
                  [106.82310522022959, -6.194318214294412],
                  [106.83996542877799, -6.196969304397825],
                  [106.84280413736138, -6.200475564399056],
                  [106.84383639502687, -6.200475564399056],
                  [106.84624499624886, -6.202442480534941],
                ],
                type: "LineString",
              },
            },
          ],
        },
      });

      map.current.addLayer({
        id: "route",
        type: "line",
        source: "route",
        layout: {
          // Make the layer visible by default.
          visibility: "visible",
          "line-join": "round",
          "line-cap": "round",
        },
        paint: {
          "line-color": "#877b59",
          "line-width": 2,
        },
      });
    });
    // After the last frame rendered before the map enters an "idle" state.
    map.current.on("idle", () => {
      // If these two layers were not added to the map, abort
      if (
        !map.current.getLayer("wisata-layer") ||
        !map.current.getLayer("route")
      ) {
        return;
      }

      // Enumerate ids of the layers.
      const toggleableLayerIds = ["wisata-layer", "route"];

      // Set up the corresponding toggle button for each layer.
      for (const id of toggleableLayerIds) {
        // Skip layers that already have a button set up.
        if (document.getElementById(id)) {
          continue;
        }

        // Create a link.
        const link = document.createElement("a");
        link.id = id;
        link.href = "#";
        link.textContent = id;
        link.className = "active";

        // Show or hide layer when the toggle is clicked.
        link.onclick = function (e) {
          const clickedLayer = this.textContent;
          e.preventDefault();
          e.stopPropagation();

          const visibility = map.current.getLayoutProperty(
            clickedLayer,
            "visibility"
          );

          // Toggle layer visibility by changing the layout object's visibility property.
          if (visibility === "visible") {
            map.current.setLayoutProperty(clickedLayer, "visibility", "none");
            this.className = "";
          } else {
            this.className = "active";
            map.current.setLayoutProperty(
              clickedLayer,
              "visibility",
              "visible"
            );
          }
        };

        const layers = document.getElementById("menu");
        layers.appendChild(link);
      }
    });
  });

  // MAP COMPONENT (FUNCTION ATAU CONTROL)
  // POPUP
  useEffect(() => {
    // When a click event occurs on a feature in the places layer, open a popup at the
    // location of the feature, with description HTML from its properties.
    map.current.on("click", "wisata-layer", (e) => {
      // Copy coordinates array.
      const coordinates = e.features[0].geometry.coordinates.slice();
      const description = e.features[0].properties.NAMOBJ;
      console.log("ini koordinat:", coordinates);
      console.log("ini deskripsi:", description);
      // Ensure that if the map is zoomed out such that multiple
      // copies of the feature are visible, the popup appears
      // over the copy being pointed to.
      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }

      new mapboxgl.Popup()
        .setLngLat(coordinates)
        .setHTML(description)
        .addTo(map.current);
    });
  }, []);

  useEffect(() => {
    // Change the cursor to a pointer when the mouse is over the places layer.
    map.current.on("mouseenter", "places", () => {
      map.current.getCanvas().style.cursor = "pointer";
    });

    // Change it back to a pointer when it leaves.
    map.current.on("mouseleave", "places", () => {
      map.current.getCanvas().style.cursor = "";
    });
  });

  // READ LONGLAT
  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  return (
    <div className="direction-map">
      <div className="sidebar">
        {/* Longitude: {lng} | Latitude: {lat} | Zoom: {zoom} */}
        <Button
          variant={isDirectionActive ? "success" : "secondary"}
          size="sm"
          onClick={toggleDirection}
        >
          {isDirectionActive ? "Turn Off Direction" : "Turn On Direction"}
        </Button>
      </div>
      <div id="menu"></div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
};

export default DirectionMap;
