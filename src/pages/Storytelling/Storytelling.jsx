import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

import NavigationBar from "../../components/NavigationBar";
import TourismStory from "./TourismStory";

// CSS
import "./Storytelling.css";

import wisataData from "../../data/wisata.json";
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
  const [wisataByCategory, setWisataByCategory] = useState({});

  // Intersection Observer
  const { ref: sectionOne, inView: oneVisible } = useInView({ threshold: 0.7 });
  const { ref: sectionTwo, inView: twoVisible } = useInView({ threshold: 0.7 });
  const { ref: sectionThree, inView: threeVisible } = useInView({
    threshold: 0.7,
  });
  const { ref: sectionFour, inView: fourVisible } = useInView({
    threshold: 0.7,
  });
  const { ref: sectionFive, inView: fiveVisible } = useInView({
    threshold: 0.7,
  });
  const { ref: sectionSix, inView: sixVisible } = useInView({ threshold: 0.7 });
  const { ref: sectionSeven, inView: sevenVisible } = useInView({
    threshold: 0.7,
  });
  const { ref: sectionEight, inView: eightVisible } = useInView({
    threshold: 0.7,
  });
  const { ref: sectionNine, inView: nineVisible } = useInView({
    threshold: 0.7,
  });
  const { ref: sectionTen, inView: tenVisible } = useInView({ threshold: 0.7 });
  const { ref: sectionEleven, inView: elevenVisible } = useInView({
    threshold: 0.7,
  });
  const { ref: sectionTwelve, inView: twelveVisible } = useInView({
    threshold: 0.7,
  });
  const { ref: sectionThirteen, inView: thirteenVisible } = useInView({
    threshold: 0.7,
  });
  const { ref: sectionFourteen, inView: fourteenVisible } = useInView({
    threshold: 0.7,
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

    const categorizedData = wisataData.features.reduce((acc, feature) => {
      const { KT_WISATA, ...otherProperties } = feature.properties;

      if (feature.geometry && feature.geometry.coordinates) {
        if (!acc[KT_WISATA]) {
          acc[KT_WISATA] = [];
        }

        acc[KT_WISATA].push({ ...otherProperties, geometry: feature.geometry });
      }

      return acc;
    }, {});
    console.log(categorizedData["Wisata Olahraga"]);
    setWisataByCategory(categorizedData);
  }, [basemap, wisataData, wisataByCategory]);

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
    if (chapter.icon) {
      map.loadImage(`icon/layer/${chapter.icon}.png`, (error, image) => {
        if (error) throw error;
        map.addImage(`${chapter.icon}`, image);
        map.addSource(chapter.sourceID, {
          type: "vector",
          url: chapter.layerUrl,
        });

        map.addLayer({
          id: chapter.layerID,
          source: chapter.sourceID,
          ...chapter.layerLoad,
        });
      });
    } else {
      map.addSource(chapter.sourceID, {
        type: "vector",
        url: chapter.layerUrl,
      });

      map.addLayer({
        id: chapter.layerID,
        source: chapter.sourceID,
        ...chapter.layerLoad,
      });
    }

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

  // ROTATE FUNCTION
  const onRotateAnimation = () => {
    map.current.once("moveend", () => {
      const rotateNumber = map.current.getBearing();
      map.current.rotateTo(rotateNumber + 180, {
        duration: 60000,
        easing: function (t) {
          return t;
        },
      });
    });
  };

  // ON CHANGE CHAPTER
  const onChangeChapter = (chapter) => {
    const { category, layerID, sourceID, isLayerOn, rotateAnimation, icon } =
      chapter;
    const dataForCategory = wisataByCategory[category];
    console.log(category, dataForCategory);
    if (dataForCategory && isLayerOn) {
      removeChapterLayers(map.current);

      map.current.loadImage(`icon/layer/${icon}.png`, (error, image) => {
        if (error) throw error;
        map.current.addImage(`${icon}`, image);
        map.current.addSource(sourceID, {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: dataForCategory.map((wisata) => ({
              type: "Feature",
              properties: { ...wisata },
              geometry: {
                type: "Point",
                coordinates: [
                  wisata.geometry.coordinates[0],
                  wisata.geometry.coordinates[1],
                ],
              },
            })),
          },
        });

        map.current.addLayer({
          id: layerID,
          source: sourceID,
          type: "symbol",
          layout: {
            "icon-image": icon,
            visibility: "visible",
          },
        });
      });

      map.current.setLayoutProperty(layerID, "visibility", "visible");

      setActiveLayers({ layerID: layerID, sourceID: sourceID });
      flyToLocation(chapter.location);
    } else if (!dataForCategory) {
      flyToLocation(chapter.location);
      removeChapterLayers(map.current, chapter);
      if (isLayerOn) {
        addChapterLayers(map.current, chapter);
      }
      if (rotateAnimation) {
        onRotateAnimation();
      }
    } else {
      removeChapterLayers(map.current);
    }
  };

  // TRIGGER FLYFUNCTION
  useEffect(() => {
    console.log(
      "One:",
      oneVisible,
      "Two:",
      twoVisible,
      "Three:",
      threeVisible,
      "Four:",
      fourVisible,
      "Seven:",
      sevenVisible
    );

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
      } else if (fourVisible) {
        onChangeChapter(config.chapters[3]);
        console.log("Fly to Loc 4");
      } else if (fiveVisible) {
        onChangeChapter(config.chapters[4]);
        console.log("Fly to Loc 5");
      } else if (sixVisible) {
        onChangeChapter(config.chapters[5]);
        console.log("Fly to Loc 6");
      } else if (sevenVisible) {
        onChangeChapter(config.chapters[6]);
        console.log("Fly to Loc 7");
      } else if (eightVisible) {
        onChangeChapter(config.chapters[7]);
        console.log("Fly to Loc 8");
      } else if (nineVisible) {
        onChangeChapter(config.chapters[8]);
        console.log("Fly to Loc 9");
      } else if (tenVisible) {
        onChangeChapter(config.chapters[9]);
        console.log("Fly to Loc 10");
      } else if (elevenVisible) {
        onChangeChapter(config.chapters[10]);
        console.log("Fly to Loc 11");
      } else if (twelveVisible) {
        for (let i = 12; i <= 20; i++) {
          const chapter = config.chapters[i];
          if (map.current.getLayer(chapter.layerID)) {
            map.current.removeLayer(chapter.layerID);
          }
          if (map.current.getSource(chapter.sourceID)) {
            map.current.removeSource(chapter.sourceID);
          }
        }
        onChangeChapter(config.chapters[11]);
        console.log("Fly to Loc 12");
      } else if (thirteenVisible) {
        onChangeChapter(config.chapters[12]);
        console.log("Fly to Loc 13");

        for (let i = 12; i <= 20; i++) {
          const chapter = config.chapters[i];
          if (map.current.getLayer(chapter.layerID)) {
            map.current.removeLayer(chapter.layerID);
          }
          if (map.current.getSource(chapter.sourceID)) {
            map.current.removeSource(chapter.sourceID);
          }
        }
        // Menambahkan layer yang baru
        addChapterLayers(map.current, config.chapters[13]);
        addChapterLayers(map.current, config.chapters[14]);
        addChapterLayers(map.current, config.chapters[15]);
        addChapterLayers(map.current, config.chapters[16]);
        addChapterLayers(map.current, config.chapters[17]);
        addChapterLayers(map.current, config.chapters[18]);
        addChapterLayers(map.current, config.chapters[19]);
        addChapterLayers(map.current, config.chapters[20]);
      } else if (fourteenVisible) {
        onChangeChapter(config.chapters[21]);
        console.log("Fly to Loc 14");
        // Membersihkan layer sebelum menambahkan yang baru
        for (let i = 12; i <= 20; i++) {
          const chapter = config.chapters[i];
          if (map.current.getLayer(chapter.layerID)) {
            map.current.removeLayer(chapter.layerID);
          }
          if (map.current.getSource(chapter.sourceID)) {
            map.current.removeSource(chapter.sourceID);
          }
        }
      }
    }
  }, [
    oneVisible,
    twoVisible,
    threeVisible,
    fourVisible,
    fiveVisible,
    sixVisible,
    sevenVisible,
    eightVisible,
    nineVisible,
    tenVisible,
    elevenVisible,
    twelveVisible,
    thirteenVisible,
    fourteenVisible,
  ]);

  // MAP COMPONENT (FUNCTION ATAU CONTROL)
  // POPUP
  useEffect(() => {
    const clickListener = (e) => {
      if (e.features.length > 0) {
        const coordinates = e.features[0].geometry.coordinates.slice();
        const description = e.features[0].properties.NAMOBJ;
        console.log("ini deskripsi:", description);

        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        new mapboxgl.Popup()
          .setLngLat(coordinates)
          .setHTML(description)
          .addTo(map.current);
      }
    };

    map.current.on("click", "titik-wisata", clickListener);

    map.current.on("mouseenter", "places", () => {
      map.current.getCanvas().style.cursor = "pointer";
    });

    map.current.on("mouseleave", "places", () => {
      map.current.getCanvas().style.cursor = "";
    });

    // Membersihkan event listener saat komponen di-unmount
    return () => {
      map.current.off("click", "titik-wisata", clickListener);
      map.current.off("mouseenter", "places");
      map.current.off("mouseleave", "places");
    };
  }, []);

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
          <section className="chapter" ref={sectionFour}>
            <TourismStory story={config.chapters[3]} />
          </section>
          <section className="chapter" ref={sectionFive}>
            <TourismStory story={config.chapters[4]} />
          </section>
          <section className="chapter" ref={sectionSix}>
            <TourismStory story={config.chapters[5]} />
          </section>
          <section className="chapter" ref={sectionSeven}>
            <TourismStory story={config.chapters[6]} />
          </section>
          <section className="chapter" ref={sectionEight}>
            <TourismStory story={config.chapters[7]} />
          </section>
          <section className="chapter" ref={sectionNine}>
            <TourismStory story={config.chapters[8]} />
          </section>
          <section className="chapter" ref={sectionTen}>
            <TourismStory story={config.chapters[9]} />
          </section>
          <section className="chapter" ref={sectionEleven}>
            <TourismStory story={config.chapters[10]} />
          </section>
          <section className="chapter" ref={sectionTwelve}>
            <TourismStory story={config.chapters[11]} />
          </section>
          {/* TRANSPORTASI  */}
          <section className="chapter" ref={sectionThirteen}>
            <TourismStory story={config.chapters[12]} />
          </section>
          {/* CLOSING  */}
          <section className="chapter" ref={sectionFourteen}>
            <TourismStory story={config.chapters[21]} />
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
