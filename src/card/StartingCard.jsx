import { renderImagesInText } from "./Card.jsx";

const StartingCard = ({ data }) => {
  return (
    <div className="card">
      <div className="upper-container">
        <div className="left-column">
          <img
            className="core-icon"
            src={require(`../assets/icons/${data.core}-v2.png`)}
            alt={data.core}
          />
          {data.conditions.split(", ").map((condition, index) => (
            <div className="condition" key={index}>
              <img
                className="star-icon"
                src={require(`../assets/icons/Star-${index + 1}.png`)}
                alt={`star-${index + 1}`}
              />
              <img
                className="condition-icon"
                src={require(`../assets/icons/${condition}-v2.png`)}
                alt={condition}
              />
            </div>
          ))}
        </div>
        <div className="middle-column">
          <div className="name">{data.name.toUpperCase()}</div>
          <div className="type">{data.type}</div>
        </div>
        <div className="right-column">
          <img
            className="type-icon"
            src={require(`../assets/icons/Team-${data.team}.png`)}
            alt={`Team ${data.team}`}
          />
        </div>
      </div>
      <div className="lower-container">
        <img
          className="worker"
          src={require(`../assets/icons/Worker${data.worker}-v2.png`)}
          alt={`${data.worker} worker`}
        />
        <div className="ability">
          <div>{renderImagesInText(data.ability)}</div>
        </div>
      </div>
    </div>
  );
};

export default StartingCard;
