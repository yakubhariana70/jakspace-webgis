import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import NavigationBar from "../../components/NavigationBar";

// CSS
import "./Storytelling.css";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_KEY;

const Storytelling = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(106.827);
  const [lat, setLat] = useState(-6.175);
  const [zoom, setZoom] = useState(10);
  const [basemap, setBasemap] = useState("dawn");

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
  }, [basemap]);

  return (
    <div id="storytelling-page">
      <section id="story-container">
        <nav className="border">
          <NavigationBar />
        </nav>
        <main id="information">
          <h1>Tourism Type</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. At
            adipisci cumque beatae velit id quos? Repellat, quibusdam! Veritatis
            magni molestias, consequuntur aliquam quas quia ratione sapiente!
            Nemo officia autem placeat.
          </p>
          <h1>Tourism Type</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. At
            adipisci cumque beatae velit id quos? Repellat, quibusdam! Veritatis
            magni molestias, consequuntur aliquam quas quia ratione sapiente!
            Nemo officia autem placeat.
          </p>
          <h1>Tourism Type</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. At
            adipisci cumque beatae velit id quos? Repellat, quibusdam! Veritatis
            magni molestias, consequuntur aliquam quas quia ratione sapiente!
            Nemo officia autem placeat.
          </p>
        </main>
      </section>
      <section id="story-mapbox">
        <div ref={mapContainer} className="map-container" />
      </section>
    </div>
  );
};

export default Storytelling;
