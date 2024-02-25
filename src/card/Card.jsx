import React from "react";
import "./Card.css";
import StartingCard from "./StartingCard";
import ItemCard from "./ItemCard";
import MeteoriteCard from "./MeteoriteCard";
import QuestCard from "./QuestCard";

function renderImagesInText(text, splitSentences = false) {
  if (!text) {
    return text;
  }

  const parts = text.split(/\[(.*?)\]/g);
  return parts.map((part, index) => {
    if (index % 2 === 1) {
      // If it's an odd index, it's an image id
      return (
        <img
          className="icon"
          key={index}
          src={require(`../assets/icons/${part}.png`)}
          alt={part}
        />
      );
    } else {
      if (splitSentences) {
        return part.split(".").map((sentence, index) => {
          if (index % 2 === 1) {
            return (
              <>
                {"." + sentence}
                <br />
              </>
            );
          } else {
            return sentence;
          }
        });
      }

      return part;
    }
  });
}

const Card = ({ data }) => {
  if (data.type === "character" || data.type === "companion") {
    return <StartingCard data={data} />;
  }

  if (data.type === "item") {
    return <ItemCard data={data} />;
  }

  if (data.type === "meteorite") {
    return <MeteoriteCard data={data} />;
  }

  if (data.type === "quest") {
    return <QuestCard data={data} />;
  }
};

export { renderImagesInText };
export default Card;
