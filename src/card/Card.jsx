import React from "react";
import "./Card.css";

function renderImagesInText(text) {
  if (!text) {
    return text;
  }
  
  const parts = text.split(/\[(.*?)\]/g);
  return parts.map((part, index) => {
      if (index % 2 === 1) { // If it's an odd index, it's an image id
          return <img className="icon" key={index} src={require(`../assets/icons/${part}.png`)} alt={part} />;
      } else {
          return part;
      }
  });
}

const Card = ({ data }) => {
  return (
    <div className="card">
      <h2>{data.name}</h2>
      <p>Type: {data.type}</p>
      <p>Description: {renderImagesInText(data.ability)}</p>
    </div>
  );
};

export default Card;
