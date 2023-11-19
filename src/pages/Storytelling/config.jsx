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
      title:
        "Atur perjalanan, singgahi setiap sudut wisata Jakarta Metropolitan!",
      subtitle: "Introduction",
      image: "image-story/story-1.jpg",
      hidden: false,
      description:
        "Bingung memilih destinasi wisata di Kota Jakarta? Banyaknya rekomendasi vlogger dan selebgram yang buat kamu bimbang? Mari tentukan tempat healing-mu disini! WebGIS Partayana Bhumi Jakarta mengemas rekomendasi wisata di Kota Jakarta dari sisi geospasial secara interaktif melalui 3D Mapping. Ratusan titik destinasi dan ulasan menarik dari berbagai jenis wisata yang dilengkapi visualisasi 3D buat kamu lebih mengerti dimana tempat yang cocok untuk menyegarkan pikiran. Fitur maps yang tersedia juga membantumu mengatur perjalanan. Penasaran? Yuk Swipe ke atas!",
      location: {
        center: [106.827, -6.175],
        zoom: 9,
        pitch: 15,
        bearing: 0,
        duration: 5000,
        essential: true,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
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
          "fill-opacity": 0.6,
        },
      },
    },
    {
      id: "story-intro",
      alignment: "right",
      title: "Aneka Wisata Jakarta",
      subtitle: "Introduction",
      image: "image-story/story-2.jpg",
      hidden: false,
      description:
        "Tak hanya dipenuhi gedung tinggi dan perkantoran, Jakarta menjadi salah satu kota dengan destinasi wisata terbanyak di Indonesia. Sedikitnya, ada 10 kategori wisata yang dapat dikunjungi, mulai dari wisata bertema keluarga, sejarah, perbelanjaan, olahraga, seni dan budaya, religi, kuliner, ruang terbuka hijau, dan acara resmi atau pertunjukan, dan alam",
      location: {
        center: [106.821428, -6.195368],
        zoom: 16,
        pitch: 70,
        bearing: 60,
        duration: 5000,
        essential: true,
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      callback: "",
      isLayerOn: false,
    },
    {
      id: "chapter-1",
      alignment: "left",
      title: "Wisata Keluarga",
      subtitle: "Wisata DKI Jakarta",
      category: "Wisata Keluarga",
      hidden: false,
      icon: "keluarga",
      image: "image-story/Wisata Keluarga/mangrove angke kapuk.jpg",
      description:
        "Meski banyak yang bilang kehidupan di Jakarta itu sibuk dan melelahkan, nyatanya banyak wisata family friendly seperti taman hiburan anak, kebun binatang, dan daya tarik lainnya membuat Jakarta menjadi diestinasi ideal bagi seluruh keluarga untuk menikmati momen liburan penuh kenangan ",
      location: {
        center: [106.827, -6.175],
        zoom: 12,
        pitch: 60,
        bearing: -43.2,
        duration: 5000,
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
      subtitle: "Wisata DKI Jakarta",
      category: "Wisata Sejarah",
      hidden: false,
      icon: "sejarah",
      image: "image-story/Wisata Sejarah/MUSEUM FATAHILAH.jpg",
      description:
        "Jelajahi keajaiban sejarah dengan mendalami warisan budaya lokal, Jakarta adalah kota yang tepat bagi kamu yang ingin  berwisata pada jejak masa lalu dan belajar dari pengalaman",
      location: {
        center: [106.827, -6.205],
        zoom: 11,
        pitch: 45,
        bearing: -10.2,
        duration: 5000,
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
      title: "Tempat Perbelanjaan",
      subtitle: "Wisata DKI Jakarta",
      category: "Tempat Perbelanjaan",
      hidden: false,
      icon: "perbelanjaan",
      image: "image-story/Tempat Perbelanjaan/PIK VANUE.jpg",
      description:
        "Kurang rasanya berwisata tanpa berbelanja. Berbelanja menjadi suatu pengalaman yang menarik untuk menemukan suvenir ikonik dari merek lokal yang nyentrik, serta berbagai kenang-kenangan unik untuk menambah cerita perjalanan Anda.",
      location: {
        center: [106.827, -6.175],
        zoom: 11,
        pitch: 15,
        bearing: -60.2,
        duration: 5000,
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
      subtitle: "Wisata DKI Jakarta",
      category: "Wisata Olahraga",
      hidden: false,
      icon: "olahraga",
      image: "image-story/Wisata Olahraga/Jakarta International Stadion.jpeg",
      description:
        "Bersenang-senang itu perlu, menjaga kesehatan tetap nomor satu. Lepaskan semangatmu untuk terus menjaga kesehatan di berbagai fasilitas olahraga modern yang dapat dinikmati di Jakarta. ",
      location: {
        center: [106.827, -6.175],
        zoom: 11,
        pitch: 45,
        bearing: -60.2,
        duration: 5000,
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
      subtitle: "Wisata DKI Jakarta",
      category: "Wisata Seni dan Budaya",
      hidden: false,
      icon: "seni-budaya",
      image: "image-story/Wisata Seni dan Budaya/Ciputra_Artpreneur_Museum.jpg",
      description:
        "Mulai dari pameran hingga banyaknya pagelaran ternama yang ada, Jakarta bisa menjadi surga bagi kamu pecinta seni baik tradisional maupun kontemporer.Begitu banyak tempat yang bisa dikunjungi untuk mengumpulkan koleksi foto aesthetic-mu.",
      location: {
        center: [106.83965839995159, -6.189412107392059],
        zoom: 16.75,
        pitch: 75,
        bearing: 150,
        duration: 5000,
        essential: true,
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      callback: "",
      isLayerOn: true,
      sourceID: "wisata",
      layerID: "titik-wisata",
    },
    {
      id: "chapter-6",
      alignment: "left",
      title: "Wisata Religi",
      subtitle: "Wisata DKI Jakarta",
      category: "Wisata Religi",
      hidden: false,
      icon: "religi",
      image: "image-story/Wisata Religi/masjid istiqlal.jpg",
      description:
        "Hangatnya hubungan masyarakat di tengah keberagaman agama yang ada dapat kamu rasakan di Jakarta dengan mengunjungi tempat-tempat suci yang merepresentasikan simbol toleransi",
      location: {
        center: [106.827, -6.175],
        zoom: 11,
        pitch: 10,
        bearing: 15.2,
        duration: 5000,
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
      subtitle: "Wisata DKI Jakarta",
      category: "Wisata Kuliner",
      hidden: false,
      icon: "kuliner",
      image: "image-story/Wisata Kuliner/regusa es italia.jpeg",
      description:
        "Tak perlu khawatir untuk kehabisan pilihan, kamu tetap bisa menikmati makanan lezat sesuai selera di setiap sudut Kota Jakarta, mulai dari hidangan internasional dan tradisional yang khas hingga jajanan favorit yang tetap populer sepanjang waktu. Rasakan kenikmatan cita rasa baru dan pengalaman unik dalam setiap sajian.",
      location: {
        center: [106.827, -6.175],
        zoom: 10.5,
        pitch: 10,
        bearing: -20.2,
        duration: 5000,
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
      title: "Wisata Ruang Taman Hijau",
      subtitle: "Wisata DKI Jakarta",
      category: "Wisata Ruang Terbuka Hijau",
      hidden: false,
      icon: "rth",
      image: "image-story/Wisata Ruang Taman Hijau/taman suropati.jpg",
      description:
        "Di tengah padatnya kota, begitu banyak area taman hijau yang dapat kamu gunakan untuk menyegarkan pikiran, menenangkan diri, dan bersantai sejenak saat waktu akhir pekan yang singkat ",
      location: {
        center: [106.79050951235524, -6.177423395244176],
        zoom: 16.25,
        pitch: 45,
        bearing: 60.2,
        duration: 5000,
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
      title: "Tempat Penyelenggaraan Acara",
      subtitle: "Wisata DKI Jakarta",
      category: "Tempat Penyelenggaraan Acara",
      hidden: false,
      icon: "mice-venue",
      image: "image-story/Tempat Penyelenggaraan Acara/Umar Ismail.jpeg",
      description:
        "Berbagai tempat dengan fasilitas lengkap, mewah, nyaman, dan berkualitas dapat menjadi pilihan untuk kamu yang akan melangsungkan acara dengan banyak peserta atau kepentingan lainnya ",
      location: {
        center: [106.877, -6.175],
        zoom: 11,
        pitch: 30,
        bearing: -30.2,
        duration: 5000,
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
      subtitle: "Wisata DKI Jakarta",
      category: "Wisata Alam",
      hidden: false,
      icon: "wisata-alam",
      image: "image-story/Wisata Alam/pulau tidung.jpg",
      description:
        "Bosan dengan hiruk-pikuk dan ramainya ibukota, ketenangan dapat kamu temukan di Kepulauan Seribu yang menyajikan keindahan dan pesona alam ",
      location: {
        center: [106.54829, -5.581173],
        zoom: 11.5,
        pitch: 15,
        bearing: 90.2,
        duration: 5000,
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
      id: "transportation-desc",
      alignment: "left",
      title: "Transportasi Umum Sesuai Kebutuhan!",
      subtitle: "Moda Transportasi",
      image: "image-story/LRT.webp",
      hidden: false,
      icon: "kereta",
      description:
        "Untuk anda yang tidak membawa kendaraan pribadi, tidak perlu bingung untuk mencapai tempat wisata. Jakarta memiliki banyak moda transportasi umum yang bukan hanya membantu mengantarkan anda ke lokasi tujuan perjalanan, transportasi umum juga bukti bahwa Jakarta mengusung konsep smart city dan ramah lingkungan. Transportasi umum yang tersedia mulai dari bus Transjakarta, kereta api, hingga MRT dan LRT. Jaringan transportasi di DKI Jakarta bisa kamu lihat dalam tampilan peta loh!",
      location: {
        center: [106.877, -6.175],
        zoom: 10,
        pitch: 30,
        bearing: -30.2,
        duration: 5000,
        essential: true,
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      callback: "",
      isLayerOn: true,
      sourceID: "stasiun-kereta",
      layerID: "point-stasiun-kereta",
      layerUrl: "mapbox://yakubhariana70.clowkmnky04gb1uo1369vvgyj-3hwny",
      layerLoad: {
        type: "symbol",
        slot: "top",
        "source-layer": "JS-stasiun-kereta",
        layout: {
          "icon-image": "kereta",
          visibility: "visible",
        },
      },
    },
    {
      id: "transportation-item",
      icon: "mrt",
      isLayerOn: true,
      sourceID: "stasiun-mrt",
      layerID: "point-stasiun-mrt",
      layerUrl: "mapbox://yakubhariana70.clowkn7g027pp20ldj94qmd0i-3mnja",
      layerLoad: {
        type: "symbol",
        slot: "top",
        "source-layer": "JS-stasiun-mrt",
        layout: {
          "icon-image": "mrt",
          visibility: "visible",
        },
      },
    },
    {
      id: "transportation-item",
      icon: "lrt",
      isLayerOn: true,
      sourceID: "stasiun-lrt",
      layerID: "point-stasiun-lrt",
      layerUrl: "mapbox://yakubhariana70.clp18n1m123bh1mqfo4rnglzz-5ruy3",
      layerLoad: {
        type: "symbol",
        slot: "top",
        "source-layer": "JS-stasiun-LRT",
        layout: {
          "icon-image": "lrt",
          visibility: "visible",
        },
      },
    },
    {
      id: "transportation-item",
      icon: "bus",
      isLayerOn: true,
      sourceID: "terminal-bus",
      layerID: "point-terminal-bus",
      layerUrl: "mapbox://yakubhariana70.clowkrjed27qq20ld3ehv8vfv-2kgny",
      layerLoad: {
        type: "symbol",
        slot: "top",
        "source-layer": "JS-terminal-bus",
        layout: {
          "icon-image": "bus",
          visibility: "visible",
        },
      },
    },
    {
      id: "transportation-item",
      icon: "halte-tj",
      isLayerOn: true,
      sourceID: "halte-tj",
      layerID: "point-halte-tj",
      layerUrl: "mapbox://yakubhariana70.clowkscgb29tt20psl939zcii-3t55t",
      layerLoad: {
        type: "symbol",
        slot: "top",
        "source-layer": "JS-halte-transjakarta",
        layout: {
          "icon-image": "halte-tj",
          visibility: "visible",
        },
      },
    },
    {
      id: "transportation-item",
      icon: "bandara",
      isLayerOn: true,
      sourceID: "bandara",
      layerID: "point-bandara",
      layerUrl: "mapbox://yakubhariana70.clowktio804e11mo1qxmg6wim-29qnk",
      layerLoad: {
        type: "symbol",
        slot: "top",
        "source-layer": "JS-bandara",
        layout: {
          "icon-image": "bandara",
          visibility: "visible",
        },
      },
    },
    {
      id: "transportation-item",
      sourceID: "ka-route",
      layerID: "line-ka",
      layerUrl: "mapbox://yakubhariana70.clp18huim0d9a1np6galo91h0-0w31i",
      isLayerOn: true,
      layerLoad: {
        type: "line",
        slot: "middle",
        "source-layer": "JS-jalur-KA",
        layout: {
          // Make the layer visible by default.
          visibility: "visible",
          "line-join": "round",
          "line-cap": "round",
        },
        paint: {
          "line-color": "#cc3433",
          "line-width": 2,
        },
      },
    },
    {
      id: "transportation-item",
      sourceID: "lrt-route",
      layerID: "line-lrt",
      layerUrl: "mapbox://yakubhariana70.clp18jlyu2ddo1tqkf6v1d0dn-956yo",
      isLayerOn: true,
      layerLoad: {
        type: "line",
        slot: "middle",
        "source-layer": "JS-jalur-LRT",
        layout: {
          // Make the layer visible by default.
          visibility: "visible",
          "line-join": "round",
          "line-cap": "round",
        },
        paint: {
          "line-color": "#1A1D40",
          "line-width": 2,
        },
      },
    },
    {
      id: "transportation-item",
      sourceID: "mrt-route",
      layerID: "line-mrt",
      layerUrl: "mapbox://yakubhariana70.clowknwwh1xm11no4makbjv3u-0rvb4",
      isLayerOn: true,
      layerLoad: {
        type: "line",
        slot: "middle",
        "source-layer": "JS-jalur-MRT",
        layout: {
          // Make the layer visible by default.
          visibility: "visible",
          "line-join": "round",
          "line-cap": "round",
        },
        paint: {
          "line-color": "#C2FE46",
          "line-width": 2,
        },
      },
    },
    {
      id: "map-features",
      alignment: "left",
      title: "Explore Jakarta Tourism through Spatial Lens",
      subtitle: "Get to Know More!",
      image: "image-story/story-3.jpg",
      hidden: false,
      description:
        "Tak perlu resah dengan banyaknya lokasi wisata yang  tersebar di setiap sudut Kota Jakarta, Tourism Map menyajikan informasi titik dari setiap kategori lokasi wisata. Selain itu, di tengah padatnya lalulintas Kota Jakarta, Tourism Map dilengkapi dengan fitur Directions yang dapat digunakan untuk memandu perjalanan dari lokasi kamu berada ke lokasi wisata atau titik transit transportasi umum. Fitur Directions tersedia untuk setiap pilihan moda transportasi pribadi. Tunggu apa lagi segera kunjungi Tourism Map dan nikmati perjalanan wisata terbaikmu!",
      location: {
        center: [106.827, -6.175],
        zoom: 17,
        pitch: 50,
        bearing: -15.2,
        duration: 5000,
        essential: true,
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      callback: "",
      isLayerOn: false,
      button: true,
    },
  ],
};

export default config;
