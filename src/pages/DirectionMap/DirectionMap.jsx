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

      // Batas Administrasi JKT
      map.current.addSource("batas-administrasi", {
        type: "vector",
        url: "mapbox://yakubhariana70.clowla7e91y6q1omu84kz63yi-0ewwd",
      });

      map.current.addLayer({
        id: "polygon-adm-jkt",
        slot: "bottom",
        type: "fill",
        source: "batas-administrasi",
        "source-layer": "JS-batas-administrasi",
        layout: {
          // Make the layer visible by default.
          visibility: "visible",
        },
        paint: {
          "fill-color": "tomato",
          "fill-opacity": 0.5,
          "fill-outline-color": "white",
        },
      });

      // Titik Lokasi Wisata
      map.current.addSource("wisata", {
        type: "vector",
        // Use a URL for the value for the `data` property.
        url: "mapbox://yakubhariana70.clowkli3b0yst1tla16udcbpz-3i4pg",
      });

      map.current.addLayer({
        id: "point-wisata",
        slot: "top",
        type: "circle",
        source: "wisata",
        "source-layer": "JS-wisata",
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
      // Titik Stasiun Kereta
      map.current.addSource("stasiun-kereta", {
        type: "vector",
        // Use a URL for the value for the `data` property.
        url: "mapbox://yakubhariana70.clowkmnky04gb1uo1369vvgyj-3hwny",
      });

      map.current.addLayer({
        id: "point-stasiun-kereta",
        slot: "top",
        type: "circle",
        source: "stasiun-kereta",
        "source-layer": "JS-stasiun-kereta",
        layout: {
          // Make the layer visible by default.
          visibility: "visible",
        },
        paint: {
          "circle-radius": 4,
          "circle-stroke-width": 1,
          "circle-color": "cyan",
          "circle-stroke-color": "white",
        },
      });

      // Titik Stasiun MRT
      map.current.addSource("stasiun-mrt", {
        type: "vector",
        // Use a URL for the value for the `data` property.
        url: "mapbox://yakubhariana70.clowkn7g027pp20ldj94qmd0i-3mnja",
      });

      map.current.addLayer({
        id: "point-stasiun-mrt",
        slot: "top",
        type: "circle",
        source: "stasiun-mrt",
        "source-layer": "JS-stasiun-mrt",
        layout: {
          // Make the layer visible by default.
          visibility: "visible",
        },
        paint: {
          "circle-radius": 4,
          "circle-stroke-width": 1,
          "circle-color": "blue",
          "circle-stroke-color": "white",
        },
      });

      // Titik Terminal Bus
      map.current.addSource("terminal-bus", {
        type: "vector",
        // Use a URL for the value for the `data` property.
        url: "mapbox://yakubhariana70.clowkrjed27qq20ld3ehv8vfv-2kgny",
      });

      map.current.addLayer({
        id: "point-terminal-bus",
        slot: "top",
        type: "circle",
        source: "terminal-bus",
        "source-layer": "JS-terminal-bus",
        layout: {
          // Make the layer visible by default.
          visibility: "visible",
        },
        paint: {
          "circle-radius": 4,
          "circle-stroke-width": 1,
          "circle-color": "yellow",
          "circle-stroke-color": "white",
        },
      });

      // Titik Halte Transjakarta
      map.current.addSource("halte-tj", {
        type: "vector",
        // Use a URL for the value for the `data` property.
        url: "mapbox://yakubhariana70.clowkscgb29tt20psl939zcii-3t55t",
      });

      map.current.addLayer({
        id: "point-halte-tj",
        slot: "top",
        type: "circle",
        source: "halte-tj",
        "source-layer": "JS-halte-transjakarta",
        layout: {
          // Make the layer visible by default.
          visibility: "visible",
        },
        paint: {
          "circle-radius": 4,
          "circle-stroke-width": 1,
          "circle-color": "gray",
          "circle-stroke-color": "white",
        },
      });

      // Titik Bandara
      map.current.addSource("bandara", {
        type: "vector",
        // Use a URL for the value for the `data` property.
        url: "mapbox://yakubhariana70.clowktio804e11mo1qxmg6wim-29qnk",
      });

      map.current.addLayer({
        id: "point-bandara",
        slot: "top",
        type: "circle",
        source: "bandara",
        "source-layer": "JS-bandara",
        layout: {
          // Make the layer visible by default.
          visibility: "visible",
        },
        paint: {
          "circle-radius": 4,
          "circle-stroke-width": 1,
          "circle-color": "tomato",
          "circle-stroke-color": "white",
        },
      });

      // Jalur MRT
      map.current.addSource("mrt-route", {
        type: "vector",
        url: "mapbox://yakubhariana70.clowknwwh1xm11no4makbjv3u-0rvb4",
      });

      map.current.addLayer({
        id: "line-mrt",
        type: "line",
        source: "mrt-route",
        "source-layer": "JS-jalur-MRT",
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
        !map.current.getLayer("point-wisata") ||
        !map.current.getLayer("point-stasiun-kereta") ||
        !map.current.getLayer("point-stasiun-mrt") ||
        !map.current.getLayer("point-terminal-bus") ||
        !map.current.getLayer("point-halte-tj") ||
        !map.current.getLayer("point-bandara") ||
        !map.current.getLayer("line-mrt") ||
        !map.current.getLayer("polygon-adm-jkt")
      ) {
        return;
      }

      // Enumerate ids of the layers.
      const toggleableLayerIds = [
        "point-wisata",
        "point-stasiun-kereta",
        "point-stasiun-mrt",
        "point-terminal-bus",
        "point-halte-tj",
        "point-bandara",
        "line-mrt",
        "polygon-adm-jkt",
      ];

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
  },[]);

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
