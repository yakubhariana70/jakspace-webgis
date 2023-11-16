import React from "react";

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
    </div>
  );
};

export default TourismStory;
