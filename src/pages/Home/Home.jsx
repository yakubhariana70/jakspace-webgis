import React from "react";
import NavigationBar from "../../components/NavigationBar";
import {Link} from "react-router-dom";

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
          <h1>Jelajahi Pesona Budaya dan Wisata Jakarta Bersama Kami</h1>
          <p>
            Terbenam dalam pesona Jakarta, kota yang tak hanya menawarkan
            kehidupan perkotaan yang berdenyut, tetapi juga mempersembahkan
            warisan budaya yang tak ternilai. Mulailah petualangan Anda dan
            temukan cerita di setiap sudutnya
          </p>
          <Link to="/direction-map" className="btn btn-success">
            Jelajahi Pariwisata Jakarta
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
