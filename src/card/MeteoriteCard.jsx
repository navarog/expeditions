import { renderImagesInText } from "./Card.jsx";

const MeteoriteCard = ({ data }) => {
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
              <img className="meld-icon" src={require(`../assets/icons/Meld-${index + 1}.png`)} alt={`meld-${index + 1}`} />
              <img className="condition-icon" src={require(`../assets/icons/${condition}-v2.png`)} alt={condition} />
            </div>
          ))}
        </div>
        <div className="middle-column">
          <div className="name">{data.name.toUpperCase()}</div>
          <div className="type">{data.type}</div>
        </div>
        <div className="right-column">
          <img className="meteorite-bar" src={require(`../assets/icons/MeteoriteBar.png`)} alt="Meteorite Bar" />
            <div className="meld">
                {data.meld}
            </div>
        </div>
      </div>
      <div className="lower-container">
        <img
          className="worker"
          src={require(`../assets/icons/Worker${data.worker}.png`)}
          alt="meeple"
        />
        <div className="ability">{renderImagesInText(data.ability)}</div>
      </div>
    </div>
  );
};

export default MeteoriteCard;
