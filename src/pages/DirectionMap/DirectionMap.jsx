import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";

// CSS
import "./DirectionMap.css";

import wisataData from "../../data/wisata.json";

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
  const [toggleLayer, setToggleLayer] = useState(null);

  useEffect(() => {
    console.log(wisataData);
  }, []);

  // LOAD MAP AND CONTROLS
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

  // SETTING FITUR DIRECTION
  const toggleDirection = () => {
    setIsDirectionActive((prevState) => {
      const newState = !prevState;

      if (newState) {
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

      return newState;
    });
  };

  // MAP ADD LAYER
  useEffect(() => {
    map.current.on("load", () => {
      // Batas Administrasi JKT
      map.current.addSource("batas-administrasi", {
        type: "vector",
        url: "mapbox://yakubhariana70.clp19z2er2dqx1tqk0hms1p9g-42z2h",
      });

      map.current.addLayer({
        id: "polygon-adm-jkt",
        slot: "middle",
        type: "fill",
        source: "batas-administrasi",
        "source-layer": "JS-batas-administrasi",
        layout: {
          // Make the layer visible by default.
          visibility: "visible",
        },
        paint: {
          "fill-color": "#009B98",
          "fill-opacity": 0.15,
          "fill-outline-color": "white",
        },
      });

      // Jalur KA
      map.current.addSource("ka-route", {
        type: "vector",
        url: "mapbox://yakubhariana70.clp18huim0d9a1np6galo91h0-0w31i",
      });

      map.current.addLayer({
        id: "line-ka",
        type: "line",
        slot: "middle",
        source: "ka-route",
        "source-layer": "JS-jalur-KA",
        layout: {
          // Make the layer visible by default.
          visibility: "visible",
          "line-join": "round",
          "line-cap": "round",
        },
        paint: {
          "line-color": "blue",
          "line-width": 2,
        },
      });

      // Jalur LRT
      map.current.addSource("lrt-route", {
        type: "vector",
        url: "mapbox://yakubhariana70.clp18jlyu2ddo1tqkf6v1d0dn-956yo",
      });

      map.current.addLayer({
        id: "line-lrt",
        type: "line",
        slot: "middle",
        source: "lrt-route",
        "source-layer": "JS-jalur-LRT",
        layout: {
          // Make the layer visible by default.
          visibility: "visible",
          "line-join": "round",
          "line-cap": "round",
        },
        paint: {
          "line-color": "red",
          "line-width": 2,
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
        slot: "middle",
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

      // Titik Lokasi Wisata
      map.current.addSource("wisata", {
        type: "geojson",
        data: wisataData,
      });

      map.current.addLayer({
        id: "point-wisata",
        slot: "top",
        type: "circle",
        source: "wisata",
        // "source-layer": "JS-wisata",
        layout: {
          // Make the layer visible by default.
          visibility: "visible",
        },
        paint: {
          "circle-radius": 4,
          // "circle-stroke-width": 1,
          "circle-color": "rgba(0, 0, 0, 0.01)",
          // "circle-stroke-color": "white",
        },
      });

      // Mengelompokkan titik wisata berdasarkan jenisnya
      const jenisWisata = {
        "Tempat Olahraga": [],
        "Tempat Penyelenggaraan Acara": [],
        "Tempat Perbelanjaan": [],
        "Wisata Alam": [],
        "Wisata Keluarga": [],
        "Wisata Kuliner": [],
        "Wisata Olahraga": [],
        "Wisata Religi": [],
        "Wisata Ruang Terbuka Hijau": [],
        "Wisata Sejarah": [],
        "Wisata Seni dan Budaya": [],
      };

      wisataData.features.forEach((feature) => {
        const jenis = feature.properties.KT_WISATA;

        if (jenisWisata[jenis]) {
          jenisWisata[jenis].push(feature);
        }
      });

      // Membuat layer baru untuk setiap jenis wisata yang terpisah
      Object.keys(jenisWisata).forEach((jenis) => {
        const sourceId = `wisata-${jenis}`;
        const layerId = `point-wisata-${jenis}`;
        let layerImage = "bus";

        if (jenis === "Tempat Olahraga") {
          layerImage = "olahraga";
        } else if (jenis === "Tempat Penyelenggaraan Acara") {
          layerImage = "mice-venue";
        } else if (jenis === "Tempat Perbelanjaan") {
          layerImage = "perbelanjaan";
        } else if (jenis === "Wisata Alam") {
          layerImage = "wisata-alam";
        } else if (jenis === "Wisata Keluarga") {
          layerImage = "keluarga";
        } else if (jenis === "Wisata Kuliner") {
          layerImage = "kuliner";
        } else if (jenis === "Wisata Olahraga") {
          layerImage = "olahraga";
        } else if (jenis === "Wisata Religi") {
          layerImage = "religi";
        } else if (jenis === "Wisata Ruang Terbuka Hijau") {
          layerImage = "rth";
        } else if (jenis === "Wisata Sejarah") {
          layerImage = "sejarah";
        } else if (jenis === "Wisata Seni dan Budaya") {
          layerImage = "seni-budaya";
        }

        map.current.loadImage(
          `icon/layer/${layerImage}.png`,
          (error, image) => {
            if (error) throw error;
            map.current.addImage(`${layerImage}`, image);
            map.current.addSource(sourceId, {
              type: "geojson",
              data: {
                type: "FeatureCollection",
                features: jenisWisata[jenis],
              },
            });

            map.current.addLayer({
              id: layerId,
              type: "symbol",
              source: sourceId,
              layout: {
                "icon-image": layerImage,
                visibility: "visible",
              },
            });
          }
        );

        // Set up the corresponding toggle button for each layer.
        const link = document.createElement("a");
        link.id = `toggle-${jenis}`; // ID untuk setiap toggle
        link.href = "#";
        link.textContent = jenis; // Teks untuk setiap toggle
        link.className = "active";
        link.setAttribute("data-layer-id", `point-wisata-${jenis}`);

        // Show or hide layer when the toggle is clicked.
        link.onclick = function (e) {
          const clickedLayerId = this.getAttribute("data-layer-id");
          e.preventDefault();
          e.stopPropagation();

          const visibility = map.current.getLayoutProperty(
            clickedLayerId,
            "visibility"
          );

          // Toggle layer visibility by changing the layout object's visibility property.
          if (visibility === "visible") {
            map.current.setLayoutProperty(clickedLayerId, "visibility", "none");
            this.className = "";
          } else {
            this.className = "active";
            map.current.setLayoutProperty(
              clickedLayerId,
              "visibility",
              "visible"
            );
          }
        };

        const layers = document.getElementById("menu-wisata");
        layers.appendChild(link);
      });

      // Titik Stasiun Kereta
      map.current.loadImage("icon/layer/kereta.png", (error, image) => {
        if (error) throw error;
        map.current.addImage("custom-marker", image);
        // Add a GeoJSON source with 2 points
        map.current.addSource("stasiun-kereta", {
          type: "vector",
          url: "mapbox://yakubhariana70.clowkmnky04gb1uo1369vvgyj-3hwny",
        });

        map.current.addLayer({
          id: "point-stasiun-kereta",
          slot: "top",
          type: "symbol",
          source: "stasiun-kereta",
          "source-layer": "JS-stasiun-kereta",
          layout: {
            "icon-image": "custom-marker",
            visibility: "visible",
          },
        });
      });

      // Titik Stasiun MRT
      map.current.loadImage("icon/layer/mrt.png", (error, image) => {
        if (error) throw error;
        map.current.addImage("mrt-marker", image);
        // Add a GeoJSON source with 2 points
        map.current.addSource("stasiun-mrt", {
          type: "vector",
          // Use a URL for the value for the `data` property.
          url: "mapbox://yakubhariana70.clowkn7g027pp20ldj94qmd0i-3mnja",
        });

        map.current.addLayer({
          id: "point-stasiun-mrt",
          slot: "top",
          type: "symbol",
          source: "stasiun-mrt",
          "source-layer": "JS-stasiun-mrt",
          layout: {
            "icon-image": "mrt-marker",
            visibility: "visible",
          },
        });
      });

      // Titik Stasiun LRT
      map.current.loadImage("icon/layer/lrt.png", (error, image) => {
        if (error) throw error;
        map.current.addImage("lrt-marker", image);
        // Add a GeoJSON source with 2 points
        map.current.addSource("stasiun-lrt", {
          type: "vector",
          // Use a URL for the value for the `data` property.
          url: "mapbox://yakubhariana70.clp18n1m123bh1mqfo4rnglzz-5ruy3",
        });

        map.current.addLayer({
          id: "point-stasiun-lrt",
          slot: "top",
          type: "symbol",
          source: "stasiun-lrt",
          "source-layer": "JS-stasiun-LRT",
          layout: {
            "icon-image": "lrt-marker",
            visibility: "visible",
          },
        });
      });

      // Titik Terminal Bus
      map.current.loadImage("icon/layer/bus.png", (error, image) => {
        if (error) throw error;
        map.current.addImage("terminal-bus-marker", image);
        // Add a GeoJSON source with 2 points
        map.current.addSource("terminal-bus", {
          type: "vector",
          // Use a URL for the value for the `data` property.
          url: "mapbox://yakubhariana70.clowkrjed27qq20ld3ehv8vfv-2kgny",
        });

        map.current.addLayer({
          id: "point-terminal-bus",
          slot: "top",
          type: "symbol",
          source: "terminal-bus",
          "source-layer": "JS-terminal-bus",
          layout: {
            "icon-image": "terminal-bus-marker",
            visibility: "visible",
          },
        });
      });

      // Titik Halte Transjakarta
      map.current.loadImage("icon/layer/halte-tj.png", (error, image) => {
        if (error) throw error;
        map.current.addImage("halte-tj-marker", image);
        // Add a GeoJSON source with 2 points
        map.current.addSource("halte-tj", {
          type: "vector",
          // Use a URL for the value for the `data` property.
          url: "mapbox://yakubhariana70.clowkscgb29tt20psl939zcii-3t55t",
        });

        map.current.addLayer({
          id: "point-halte-tj",
          slot: "top",
          type: "symbol",
          source: "halte-tj",
          "source-layer": "JS-halte-transjakarta",
          layout: {
            "icon-image": "halte-tj-marker",
            visibility: "visible",
          },
        });
      });

      // Titik Bandara
      map.current.loadImage("icon/layer/bandara.png", (error, image) => {
        if (error) throw error;
        map.current.addImage("bandara-marker", image);
        // Add a GeoJSON source with 2 points
        map.current.addSource("bandara", {
          type: "vector",
          // Use a URL for the value for the `data` property.
          url: "mapbox://yakubhariana70.clowktio804e11mo1qxmg6wim-29qnk",
        });

        map.current.addLayer({
          id: "point-bandara",
          slot: "top",
          type: "symbol",
          source: "bandara",
          "source-layer": "JS-bandara",
          layout: {
            "icon-image": "bandara-marker",
            visibility: "visible",
          },
        });
      });
    });

    // After the last frame rendered before the map enters an "idle" state.
    map.current.on("idle", () => {
      // If these two layers were not added to the map, abort
      if (
        !map.current.getLayer("point-wisata") ||
        !map.current.getLayer("point-stasiun-kereta") ||
        !map.current.getLayer("point-stasiun-mrt") ||
        !map.current.getLayer("point-stasiun-lrt") ||
        !map.current.getLayer("point-terminal-bus") ||
        !map.current.getLayer("point-halte-tj") ||
        !map.current.getLayer("point-bandara") ||
        !map.current.getLayer("line-ka") ||
        !map.current.getLayer("line-mrt") ||
        !map.current.getLayer("line-lrt") ||
        !map.current.getLayer("polygon-adm-jkt")
      ) {
        return;
      }

      // Enumerate ids of the layers.
      const toggleableLayerIds = [
        // "point-wisata",
        "point-stasiun-kereta",
        "point-stasiun-mrt",
        "point-stasiun-lrt",
        "point-terminal-bus",
        "point-halte-tj",
        "point-bandara",
        "line-ka",
        "line-mrt",
        "line-lrt",
        "polygon-adm-jkt",
      ];

      const layerNames = {
        // "point-wisata": "Lokasi Wisata",
        "point-stasiun-kereta": "Stasiun Kereta ",
        "point-stasiun-mrt": "Stasiun MRT",
        "point-stasiun-lrt": "Stasiun LRT",
        "point-terminal-bus": "Terminal Bus",
        "point-halte-tj": "Halte Transjakarta",
        "point-bandara": "Bandara",
        "line-ka": "Jalur Kereta Api",
        "line-lrt": "Jalur LRT",
        "line-mrt": "Jalur MRT",
        "polygon-adm-jkt": "Batas Administrasi",
      };

      // Set up the corresponding toggle button for each layer.
      for (const id of toggleableLayerIds) {
        const layerName = layerNames[id] || id;
        // Skip layers that already have a button set up.
        if (document.getElementById(id)) {
          continue;
        }

        // Create a link.
        const link = document.createElement("a");
        link.id = id;
        link.href = "#";
        link.textContent = layerName;
        link.className = "active";
        link.setAttribute("data-layer-id", id);

        // Show or hide layer when the toggle is clicked.
        link.onclick = function (e) {
          const clickedLayerId = this.getAttribute("data-layer-id");
          e.preventDefault();
          e.stopPropagation();

          const visibility = map.current.getLayoutProperty(
            clickedLayerId,
            "visibility"
          );

          // Toggle layer visibility by changing the layout object's visibility property.
          if (visibility === "visible") {
            map.current.setLayoutProperty(clickedLayerId, "visibility", "none");
            this.className = "";
          } else {
            this.className = "active";
            map.current.setLayoutProperty(
              clickedLayerId,
              "visibility",
              "visible"
            );
          }
        };

        const layers = document.getElementById("menu-transportasi");
        layers.appendChild(link);
      }
    });
  }, []);

  // MAP COMPONENT (FUNCTION ATAU CONTROL)
  // POPUP
  useEffect(() => {
    const clickListener = (e) => {
      if (e.features.length > 0) {
        const coordinates = e.features[0].geometry.coordinates.slice();
        const description = e.features[0].properties.NAMOBJ;

        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        new mapboxgl.Popup()
          .setLngLat(coordinates)
          .setHTML(description)
          .addTo(map.current);
      }
    };

    map.current.on("click", "point-wisata", clickListener);
    map.current.on("click", "point-stasiun-kereta", clickListener);
    map.current.on("click", "point-stasiun-mrt", clickListener);
    map.current.on("click", "point-stasiun-lrt", clickListener);
    map.current.on("click", "point-terminal-bus", clickListener);
    map.current.on("click", "point-halte-tj", clickListener);

    map.current.on("mouseenter", "places", () => {
      map.current.getCanvas().style.cursor = "pointer";
    });

    map.current.on("mouseleave", "places", () => {
      map.current.getCanvas().style.cursor = "";
    });

    // Membersihkan event listener saat komponen di-unmount
    return () => {
      map.current.off("click", "point-wisata", clickListener);
      map.current.off("click", "point-stasiun-kereta", clickListener);
      map.current.off("click", "point-stasiun-lrt", clickListener);
      map.current.off("click", "point-stasiun-mrt", clickListener);
      map.current.off("click", "point-terminal-bus", clickListener);
      map.current.off("click", "point-halte-tj", clickListener);
      map.current.off("mouseenter", "places");
      map.current.off("mouseleave", "places");
    };
  }, []);

  // READ LONGLAT
  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  // TOGGLE LAYER
  const onChangeLayer = (toggle) => {
    if (toggleLayer !== toggle) {
      setToggleLayer(toggle);
    } else {
      setToggleLayer(null);
    }
  };

  return (
    <div className="direction-map">
      <div id="sidebar">
        <div className="feature-bar">
          <button
            className={
              isDirectionActive ? "click-toggle active" : "click-toggle"
            }
            onClick={() => {
              toggleDirection();
            }}
          >
            <img
              className="icon"
              src={
                isDirectionActive
                  ? "icon/direction-on.svg"
                  : "icon/direction-off.svg"
              }
              alt="transportasi-layer"
            />
          </button>
        </div>
        {/* <div className="coordinate-bar">
          Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </div> */}
      </div>
      <div id="toggle-layer">
        <div
          id="menu-wisata"
          className={toggleLayer === "wisata" ? "active" : "inactive"}
        >
          {/* Konten atau layer wisata */}
        </div>
        <div
          id="menu-transportasi"
          className={toggleLayer === "transportasi" ? "active" : "inactive"}
        >
          {/* Konten atau layer fitur */}
        </div>
        <div id="button-layer-bar">
          <button
            className={
              toggleLayer === "wisata" ? "click-toggle active" : "click-toggle"
            }
            onClick={() => {
              onChangeLayer("wisata");
            }}
          >
            <img
              className="icon"
              src={
                toggleLayer === "wisata"
                  ? "icon/location-on.svg"
                  : "icon/location-off.svg"
              }
              alt="wisata-layer"
            />
          </button>
          <button
            className={
              toggleLayer === "transportasi"
                ? "click-toggle active"
                : "click-toggle"
            }
            onClick={() => {
              onChangeLayer("transportasi");
            }}
          >
            <img
              className="icon"
              src={
                toggleLayer === "transportasi"
                  ? "icon/transportasi-on.svg"
                  : "icon/transportasi-off.svg"
              }
              alt="transportasi-layer"
            />
          </button>
        </div>
      </div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
};

export default DirectionMap;
