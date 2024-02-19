import React from "react";
import "./Card.css";
import StartingCard from "./StartingCard";

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
  if (data.type === "character" || data.type === "companion") {
    return <StartingCard data={data} />;
  }
  return (
    <div className="card">
      <div className="upper-container">
        <div className="left-column"></div>
        <div className="middle-column">
          <div className="name">{data.name.toUpperCase()}</div>
          <div className="type">{data.type}</div>
        </div>
        <div className="right-column"></div>
      </div>
      <div className="lower-container">
        <img className="worker" src={require(`../assets/icons/Worker${data.worker}.png`)} alt="meeple" />
        <div className="ability">{renderImagesInText(data.ability)}</div>
      </div>
    </div>
  );
};

export { renderImagesInText };
export default Card;
