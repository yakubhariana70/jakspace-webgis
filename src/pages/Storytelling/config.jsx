var config = {
  style: "mapbox://styles/mapbox/streets-v11",
  showMarkers: true,
  markerColor: "#3FB1CE",
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
      id: "story-background",
      alignment: "left",
      title:"Atur perjalanan, singgahi setiap sudut wisata Jakarta Metropolitan!",
      subtitle:"Introduction",
      image: "image-story/story-1.jpg",
      hidden: false,
      description:
        "Bingung memilih destinasi wisata di Kota Jakarta? Banyaknya rekomendasi vlogger dan selebgram yang buat kamu bimbang? Mari tentukan tempat healing-mu disini! Halaman Djakarta Spatial Tourism mengemas rekomendasi wisata di Kota Jakarta dari sisi geospasial secara interaktif. Ratusan titik destinasi dan ulasan menarik dari berbagai jenis wisata yang dilengkapi visualisasi 3D buat kamu lebih mengerti dimana tempat yang cocok untuk menyegarkan pikiran. Fitur maps yang tersedia juga membantumu mengatur perjalanan. Penasaran? Yuk Swipe ke atas kalo kamu pake desktop atau swipe ke kiri kalo kamu pake smartphone!",
      location: {
        center: [106.827, -6.175],
        zoom: 6.5,
        pitch: 15,
        bearing: 0,
        duration: 3000,
        essential: true,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      isLayerOn: false,
    },
    {
      id: "story-intro",
      alignment: "right",
      title: "Aneka Wisata Jakarta",
      subtitle:"Introduction",
      image: "./path/to/image/source.png",
      hidden: true,
      description:
        "Tak hanya dipenuhi gedung tinggi dan perkantoran, Jakarta menjadi salah satu kota dengan destinasi wisata terbanyak di Indonesia. Sedikitnya, ada 10 kategori wisata yang dapat dikunjungi, mulai dari wisata bertema keluarga, sejarah, perbelanjaan, olahraga, seni dan budaya, religi, kuliner, ruang terbuka hijau, dan acara resmi atau pertunjukan, dan alam",
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
      layerUrl: "mapbox://yakubhariana70.clp19z2er2dqx1tqk0hms1p9g-42z2h",
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
    },
    {
      id: "chapter-1",
      alignment: "left",
      title: "Wisata Keluarga",
      subtitle:"Wisata DKI Jakarta",
      category: "Wisata Keluarga",
      hidden: true,
      icon: "keluarga",
      image: "./path/to/image/source.png",
      description:
        "Meski banyak yang bilang kehidupan di Jakarta itu sibuk dan melelahkan, nyatanya banyak wisata family friendly seperti taman hiburan anak, kebun binatang, dan daya tarik lainnya membuat Jakarta menjadi diestinasi ideal bagi seluruh keluarga untuk menikmati momen liburan penuh kenangan ",
      location: {
        center: [106.827, -6.175],
        zoom: 12,
        pitch: 60,
        bearing: -43.2,
        duration: 3000,
        essential: true,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      isLayerOn: true,
      sourceID: "wisata",
      layerID: "titik-wisata",
    },
    {
      id: "chapter-2",
      alignment: "left",
      title: "Wisata Sejarah",
      subtitle:"Wisata DKI Jakarta",
      category: "Wisata Sejarah",
      hidden: true,
      icon: "sejarah",
      image: "./path/to/image/source.png",
      description:
        "Jelajahi keajaiban sejarah dengan mendalami warisan budaya lokal, Jakarta adalah kota yang tepat bagi kamu yang ingin  berwisata pada jejak masa lalu dan belajar dari pengalaman",
      location: {
        center: [106.827, -6.175],
        zoom: 11,
        pitch: 45,
        bearing: -60.2,
        duration: 3000,
        essential: true,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      isLayerOn: true,
      sourceID: "wisata",
      layerID: "titik-wisata",
    },
    {
      id: "chapter-3",
      alignment: "left",
      title: "Wisata Komersil",
      subtitle:"Wisata DKI Jakarta",
      category: "Tempat Perbelanjaan",
      hidden: true,
      icon: "perbelanjaan",
      image: "./path/to/image/source.png",
      description:
        "Kurang rasanya berwisata tanpa berbelanja. Berbelanja menjadi suatu pengalaman yang menarik untuk menemukan suvenir ikonik dari merek lokal yang nyentrik, serta berbagai kenang-kenangan unik untuk menambah cerita perjalanan Anda.",
      location: {
        center: [106.827, -6.175],
        zoom: 11,
        pitch: 45,
        bearing: -60.2,
        duration: 3000,
        essential: true,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      isLayerOn: true,
      sourceID: "wisata",
      layerID: "titik-wisata",
    },
    {
      id: "chapter-4",
      alignment: "left",
      title: "Wisata Olahraga",
      subtitle:"Wisata DKI Jakarta",
      category: "Wisata Olahraga",
      hidden: true,
      icon: "olahraga",
      image: "./path/to/image/source.png",
      description:
        "Bersenang-senang itu perlu, menjaga kesehatan tetap nomor satu. Lepaskan semangatmu untuk terus menjaga kesehatan di berbagai fasilitas olahraga modern yang dapat dinikmati di Jakarta. ",
      location: {
        center: [106.827, -6.175],
        zoom: 11,
        pitch: 45,
        bearing: -60.2,
        duration: 3000,
        essential: true,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      isLayerOn: true,
      sourceID: "wisata",
      layerID: "titik-wisata",
    },
    {
      id: "chapter-5",
      alignment: "left",
      title: "Wisata Seni dan Budaya",
      subtitle:"Wisata DKI Jakarta",
      category: "Wisata Seni dan Budaya",
      hidden: true,
      icon: "seni-budaya",
      image: "./path/to/image/source.png",
      description:
        "Mulai dari pameran hingga banyaknya pagelaran ternama yang ada, Jakarta bisa menjadi surga bagi kamu pecinta seni baik tradisional maupun kontemporer.Begitu banyak tempat yang bisa dikunjungi untuk mengumpulkan koleksi foto aesthetic-mu.",
      location: {
        center: [106.827, -6.175],
        zoom: 11,
        pitch: 45,
        bearing: -60.2,
        duration: 3000,
        essential: true,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      isLayerOn: true,
      sourceID: "wisata",
      layerID: "titik-wisata",
    },
    {
      id: "chapter-6",
      alignment: "left",
      title: "Wisata Religi",
      subtitle:"Wisata DKI Jakarta",
      category: "Wisata Religi",
      hidden: true,
      icon: "religi",
      image: "./path/to/image/source.png",
      description:
        "Hangatnya hubungan masyarakat di tengah keberagaman agama yang ada dapat kamu rasakan di Jakarta dengan mengunjungi tempat-tempat suci yang merepresentasikan simbol toleransi",
      location: {
        center: [106.827, -6.175],
        zoom: 11,
        pitch: 45,
        bearing: -60.2,
        duration: 3000,
        essential: true,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      isLayerOn: true,
      sourceID: "wisata",
      layerID: "titik-wisata",
    },
    {
      id: "chapter-7",
      alignment: "left",
      title: "Wisata Kuliner",
      subtitle:"Wisata DKI Jakarta",
      category: "Wisata Kuliner",
      hidden: true,
      icon: "kuliner",
      image: "./path/to/image/source.png",
      description:
        "Tak perlu khawatir untuk kehabisan pilihan, kamu tetap bisa menikmati makanan lezat sesuai selera di setiap sudut Kota Jakarta, mulai dari hidangan internasional dan tradisional yang khas hingga jajanan favorit yang tetap populer sepanjang waktu. Rasakan kenikmatan cita rasa baru dan pengalaman unik dalam setiap sajian.",
      location: {
        center: [106.827, -6.175],
        zoom: 11,
        pitch: 45,
        bearing: -60.2,
        duration: 3000,
        essential: true,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      isLayerOn: true,
      sourceID: "wisata",
      layerID: "titik-wisata",
    },
    {
      id: "chapter-8",
      alignment: "left",
      title: "Wisata Taman Hijau",
      subtitle:"Wisata DKI Jakarta",
      category: "Wisata Ruang Terbuka Hijau",
      hidden: true,
      icon: "rth",
      image: "./path/to/image/source.png",
      description:
        "Di tengah padatnya kota, begitu banyak area taman hijau yang dapat kamu gunakan untuk menyegarkan pikiran, menenangkan diri, dan bersantai sejenak saat waktu akhir pekan yang singkat ",
      location: {
        center: [106.827, -6.175],
        zoom: 11,
        pitch: 45,
        bearing: -60.2,
        duration: 3000,
        essential: true,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      isLayerOn: true,
      sourceID: "wisata",
      layerID: "titik-wisata",
    },
    {
      id: "chapter-9",
      alignment: "left",
      title: "Mice Venue",
      subtitle:"Wisata DKI Jakarta",
      category: "Tempat Penyelenggaraan Acara",
      hidden: true,
      icon: "mice-venue",
      image: "./path/to/image/source.png",
      description:
        "Berbagai tempat dengan fasilitas lengkap, mewah, nyaman, dan berkualitas dapat menjadi pilihan untuk kamu yang akan melangsungkan acara dengan banyak peserta atau kepentingan lainnya ",
      location: {
        center: [106.827, -6.175],
        zoom: 11,
        pitch: 45,
        bearing: -60.2,
        duration: 3000,
        essential: true,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      isLayerOn: true,
      sourceID: "wisata",
      layerID: "titik-wisata",
    },
    {
      id: "chapter-10",
      alignment: "left",
      title: "Wisata Alam",
      subtitle:"Wisata DKI Jakarta",
      category: "Wisata Alam",
      hidden: true,
      icon: "wisata-alam",
      image: "./path/to/image/source.png",
      description:
        "Bosan dengan hiruk-pikuk dan ramainya ibukota, ketenangan dapat kamu temukan di kepulauan seribu yang menyajikan keindahan dan pesona alam ",
      location: {
        center: [106.827, -6.175],
        zoom: 11,
        pitch: 45,
        bearing: -60.2,
        duration: 3000,
        essential: true,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      isLayerOn: true,
      sourceID: "wisata",
      layerID: "titik-wisata",
    },
    {
      id: "map-features",
      alignment: "left",
      title: "Explore Jakarta Tourism through Spatial Lens",
      subtitle:"Get to Know More!",
      image: "./path/to/image/source.png",
      hidden: true,
      description:
        "Tak perlu resah dengan banyaknya lokasi wisata yang  tersebar di setiap sudut Kota Jakarta,fitur maps dapat digunakan untuk memandu perjalananmu dari satu titik ke titik destinasi lainnya. Fitur maps menyajikan informasi titik dari setiap lokasi wisata. Selain itu, di tengah padatnya lalulintas Kota Jakarta, fitur maps juga menyediakan petunjuk rute  yang dapat dapat digunakan untuk menempuh perjalanan dari lokasi kamu berada  ke lokasi wisata . Petunjuk rute ini tersedia untuk setiap pilihan moda transportasi pribadi. Informasi titik penjemputan dan rute perjalanan untuk setiap transportasi umum juga tersedia.",
      location: {
        center: [106.827, -6.175],
        zoom: 18,
        pitch: 50,
        bearing: -15.2,
        duration: 3000,
        essential: true,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      isLayerOn: false,
    },
  ],
};

export default config;