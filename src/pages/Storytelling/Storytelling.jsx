import React from "react";
import NavigationBar from "../../components/NavigationBar";

// CSS
import "./Storytelling.css";

const Storytelling = () => {
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
      <section id="story-mapbox"></section>
    </div>
  );
};

export default Storytelling;
