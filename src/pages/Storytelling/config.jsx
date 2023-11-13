var config = {
  style: "mapbox://styles/mapbox/streets-v11",
  // accessToken: mapboxAccessToken,
  showMarkers: true,
  markerColor: "#3FB1CE",
  //projection: 'equirectangular',
  //Read more about available projections here
  //https://docs.mapbox.com/mapbox-gl-js/example/projections/
  inset: true,
  theme: "dark",
  use3dTerrain: false, //set true for enabling 3D maps.
  auto: false,
  title: "The Title Text of this Story",
  subtitle: "A descriptive and interesting subtitle to draw in the reader",
  byline: "By a Digital Storyteller",
  footer:
    'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
  chapters: [
    {
      id: "slug-style-id",
      alignment: "left",
      hidden: false,
      title: "Display Title",
      image: "./path/to/image/source.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      location: {
        center: [106.827, -6.175],
        zoom: 6.5,
        pitch: 15,
        bearing: 0,
        duration: 5000,
        essential: true,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      isLayerOn: false,
      onChapterEnter: [
        // {
        //     layer: 'layer-name',
        //     opacity: 1,
        //     duration: 5000
        // }
      ],
      onChapterExit: [
        // {
        //     layer: 'layer-name',
        //     opacity: 0
        // }
      ],
    },
    {
      id: "second-identifier",
      alignment: "right",
      hidden: false,
      title: "Second Title",
      image: "./path/to/image/source.png",
      description: "Copy these sections to add to your story.",
      location: {
        center: [106.827, -6.175],
        zoom: 8.5,
        pitch: 15,
        bearing: 0,
        duration: 5000,
        essential: true,
        // flyTo additional controls-
        // These options control the flight curve, making it move
        // slowly and zoom out almost completely before starting
        // to pan.
        //speed: 2, // make the flying slow
        //curve: 1, // change the speed at which it zooms out
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      callback: "",
      isLayerOn: true,
      sourceID: "batas-administrasi",
      layerID: "JS-administrasi",
      layerUrl: "mapbox://yakubhariana70.clowla7e91y6q1omu84kz63yi-0ewwd",
      layerLoad: {
        type: "fill",
        slot: "top",
        "source-layer": "JS-batas-administrasi",
        paint: {
          "fill-color": "#FF0000",
          "fill-outline-color": "#F2F2F2",
          "fill-opacity": 0.7,
        },
      },
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "third-identifier",
      alignment: "left",
      hidden: false,
      title: "Third Title",
      image: "./path/to/image/source.png",
      description: "Copy these sections to add to your story.",
      location: {
        center: [106.827, -6.175],
        zoom: 12,
        pitch: 60,
        bearing: -43.2,
        duration: 8000,
        essential: true,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      isLayerOn: true,
      sourceID: "wisata",
      layerID: "JS-wisata",
      layerUrl: "mapbox://yakubhariana70.clok3ic7o2rfb2hrwtlimqvlk-5k1gm",
      layerLoad: {
        type: "circle",
        slot: "top",
        "source-layer": "JakSpace_-_Lokasi_Wisata",
        paint: {
          "circle-radius": 4,
          "circle-stroke-width": 1,
          "circle-color": "limegreen",
          "circle-stroke-color": "white",
        },
      },
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "fourth-chapter",
      alignment: "fully",
      hidden: false,
      title: "Third Title",
      image: "./path/to/image/source.png",
      description: "Copy these sections to add to your story.",
      location: {
        center: [-58.54195, -34.716],
        zoom: 4,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
  ],
};

export default config;
