import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import { useInView } from "react-intersection-observer";

import NavigationBar from "../../components/NavigationBar";
import TourismStory from "./TourismStory";

// CSS
import "./Storytelling.css";

import config from "./config";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_KEY;

const Storytelling = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  // const [lng, setLng] = useState(106.827);
  // const [lat, setLat] = useState(-6.175);
  // const [zoom, setZoom] = useState(10);
  const [viewport, setViewport] = useState(config.chapters[0].location);
  const [basemap, setBasemap] = useState("dawn");

  // Intersection Observer
  const { ref: sectionOne, inView: oneVisible } = useInView({ threshold: 0.8 });
  const { ref: sectionTwo, inView: twoVisible } = useInView({ threshold: 0.8 });
  const { ref: sectionThree, inView: threeVisible } = useInView({
    threshold: 0.8,
  });

  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      ...viewport,
    });

    // AKTIVASI STYLE MAPBOX STANDARD
    map.current.on("style.load", () => {
      map.current.setConfigProperty("basemap", "lightPreset", basemap);
    });

    map.current.addControl(new mapboxgl.NavigationControl());
    map.current.addControl(new mapboxgl.FullscreenControl());
  }, [basemap]);

  // ADD OR REMOVE LAYER
  const [activeLayers, setActiveLayers] = useState({
    layerID: null,
    sourceID: null,
  });

  const removeChapterLayers = (map) => {
    const { layerID, sourceID } = activeLayers;

    // Hapus lapisan sebelumnya jika ada
    if (layerID && map.getLayer(layerID)) {
      map.removeLayer(layerID);
    }

    // Hapus sumber data sebelumnya jika ada
    if (sourceID && map.getSource(sourceID)) {
      map.removeSource(sourceID);
    }

    // Reset activeLayers state
    setActiveLayers({ layerID: null, sourceID: null });
  };

  const addChapterLayers = (map, chapter) => {
    // Tambahkan sumber data baru
    map.addSource(chapter.sourceID, {
      type: "vector",
      url: chapter.layerUrl,
    });

    map.addLayer({
      id: chapter.layerID,
      source: chapter.sourceID,
      ...chapter.layerLoad,
    });

    // Atur opacity menjadi 0 agar layer tersembunyi
    map.setLayoutProperty(chapter.layerID, "visibility", "none");

    // Timed delay untuk memberikan waktu agar layer dapat diatur opacity-nya setelah ditambahkan
    setTimeout(() => {
      // Atur opacity menjadi 1 agar layer terlihat
      map.setLayoutProperty(chapter.layerID, "visibility", "visible");
    }, 1000);

    setActiveLayers({ layerID: chapter.layerID, sourceID: chapter.sourceID });
  };

  // FLY-TO FUNCTION
  const flyToLocation = (location) => {
    map.current.flyTo(location);
    setViewport(location);
  };

  // ON CHANGE CHAPTER
  const onChangeChapter = (chapter) => {
    flyToLocation(chapter.location);
    removeChapterLayers(map.current, chapter);
    if (chapter.isLayerOn) {
      addChapterLayers(map.current, chapter);
    }
  };
  // TRIGGER FLYFUNCTION
  useEffect(() => {
    console.log("One:", oneVisible, "Two:", twoVisible);
    console.log(config);

    if (map.current && map.current.isStyleLoaded()) {
      // Pastikan peta sudah dimuat sebelum melakukan tindakan apapun
      if (oneVisible) {
        onChangeChapter(config.chapters[0]);
        console.log("Fly to Loc 1");
      } else if (twoVisible) {
        onChangeChapter(config.chapters[1]);
        console.log("Fly to Loc 2");
      } else if (threeVisible) {
        onChangeChapter(config.chapters[2]);
        console.log("Fly to Loc 3");
      }
    }
  }, [oneVisible, twoVisible, threeVisible]);

  return (
    <div id="storytelling-page">
      <section id="story-container">
        <nav className="border">
          <NavigationBar />
        </nav>
        <main id="information">
          <section className="chapter" ref={sectionOne}>
            <TourismStory story={config.chapters[0]} />
          </section>
          <section className="chapter" ref={sectionTwo}>
            <TourismStory story={config.chapters[1]} />
          </section>
          <section className="chapter" ref={sectionThree}>
            <TourismStory story={config.chapters[2]} />
          </section>
        </main>
      </section>
      <section id="story-mapbox">
        <div ref={mapContainer} className="map-container" />
      </section>
    </div>
  );
};

export default Storytelling;
