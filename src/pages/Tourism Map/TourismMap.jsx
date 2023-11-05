import React, { useState, useRef } from "react";
import Map, {GeolocateControl} from "react-map-gl";

const TourismMap = () => {
  //Referensi Map
  const mapRef = useRef();

  // Menyimpan state viewport
  const [viewport, setViewport] = useState({
    longitude: 106.827,
    latitude: -6.175,
    pitch: 0,
    bearing: 0,
    zoom: 9.75,
  });
  return (
    <div>
      Tourism Map
      <Map
        mapboxAccessToken="pk.eyJ1IjoieWFrdWJoYXJpYW5hNzAiLCJhIjoiY2xvaDF5YmswMTV3MjJpcXBjYTY3eWZzeCJ9.4CQdo0Mt8HcETgU5fTuSwg"
        initialViewState={viewport}
        ref={mapRef}
        onMove={(event) => setViewport(event.viewState)}
        style={{ width: "100vw", height: "100vh" }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        <GeolocateControl
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
        />
      </Map>
    </div>
  );
};

export default TourismMap;
