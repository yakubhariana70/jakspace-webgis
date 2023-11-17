import React from "react";
import NavigationBar from "../../components/NavigationBar";
import { Link } from "react-router-dom";

// CSS
import "./Home.css";

const Home = () => {
  return (
    <div id="home-page">
      <header>
        <div className="home-nav">
          <NavigationBar />
        </div>
      </header>
      <div className="home-picture"></div>
      <div className="home-content">
        <div className="hero-section">
          <h1>Selamat Datang di Paryatana Bhumi Jakarta!</h1>
          <sub>Jelajahi Keindahan Bertamasya di Kota Jakarta.</sub>
          <p>
            Temukan warisan sejarah dan keindahan yang menggugah jiwa kota ini.
            Dapatkan pengalaman unik dengan peta interaktif hasil karya Dipo
            Journey. Saksikan Jakarta dari perspektif tiga dimensi &#40;3D&#41;.
          </p>
          <Link to="/storytelling" className="btn-hero">
            Mulai Petualanganmu!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
