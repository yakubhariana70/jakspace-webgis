import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
// import wisatapoint from "../../data/poi-fasil.geojson"

// CSS
import "./DirectionMap.css";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_KEY;

const DirectionMap = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(106.827);
  const [lat, setLat] = useState(-6.175);
  const [zoom, setZoom] = useState(10);
  const [basemap, setBasemap] = useState("dawn");
  const [geoJSON, setGeoJSON] = useState(null);

  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      // style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      zoom: zoom,
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

    map.current.addControl(
      new MapboxDirections({
        accessToken: mapboxgl.accessToken,
      }),
      "top-left"
    );
  });

  // //FETCH DATA
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(wisatapoint);
  //       const data = await response.json();
  //       setGeoJSON(data);
  //       console.log(data);
  //     } catch (error) {
  //       console.error("Gagal mengambil data Demografi GeoJSON :", error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  // MAP ADD LAYER
  useEffect(() => {
    map.current.on("load", () => {
      map.current.addSource("wisata", {
        type: "vector",
        // Use a URL for the value for the `data` property.
        url: "mapbox://yakubhariana70.clok3ic7o2rfb2hrwtlimqvlk-5k1gm",
      });
      console.log(map.current.get);

      map.current.addLayer({
        id: "wisata-layer",
        slot: "top",
        type: "circle",
        source: "wisata",
        "source-layer": "JakSpace_-_Lokasi_Wisata",
        paint: {
          "circle-radius": 4,
          "circle-stroke-width": 1,
          "circle-color": "red",
          "circle-stroke-color": "white",
        },
      });
    });
  });

  // MAP COMPONENT (FUNCTION ATAU CONTROL)
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
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
};

export default DirectionMap;
