import { renderImagesInText } from "./Card.jsx";

const QuestCard = ({ data }) => {
  return (
    <div className="card">
      <div className="upper-container">
        <div className="left-column">
          <img
            className="core-icon"
            src={require(`../assets/icons/${data.core}-v2.png`)}
            alt={data.core}
          />
        </div>
        <div className="middle-column">
          <div className="name">{data.name.toUpperCase()}</div>
          <div className="type">{data.type}</div>
        </div>
        <div className="right-column">
            <div className="location">{data.location}</div>
            <div className="quest-icons">
                {data.conditions.split(", ").map((condition, index) => (
                    <img
                        className="quest-icon"
                        key={index}
                        src={require(`../assets/icons/${condition}.png`)}
                        alt={condition}
                    />
                ))}
                <img className="quest-icon" src={require(`../assets/icons/RedArrow.png`)} alt="Red Arrow" />
                {data.benefit.split(", ").map((benefit, index) => (
                    <img
                        className="quest-icon"
                        key={index}
                        src={require(`../assets/icons/${benefit}.png`)}
                        alt={benefit}
                    />
                ))}
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

export default QuestCard;
