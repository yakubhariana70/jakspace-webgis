import React from "react";
import { Link } from "react-router-dom";

const TourismStory = ({ story }) => {
  return (
    <div>
      {story.image && !story.hidden && (
        <img src={story.image} alt={story.title} className="img-story" />
      )}
      <br />
      <sub>{story.subtitle}</sub>
      <h1>{story.title}</h1>
      <p>{story.description}</p>
      {story.button && (
        <Link to="/direction-map" className="btn-hero">
          Tourism Map
        </Link>
      )}
    </div>
  );
};

export default TourismStory;
