import React from "react";

const TourismStory = ({ story }) => {
  return (
    <div>
      <h1>{story.title}</h1>
      <p>
        {story.description}
      </p>
    </div>
  );
};

export default TourismStory;
