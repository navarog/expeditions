import { renderImagesInText } from "./Card.jsx";

const StartingCard = ({ data }) => {
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

export default StartingCard;
