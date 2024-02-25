import { renderImagesInText } from "./Card.jsx";

const ItemCard = ({ data }) => {
  return (
    <div className="card">
      <div className="upper-container">
        <div className="left-column">
          <img
            className="core-icon"
            src={require(`../assets/icons/${data.core}-v2.png`)}
            alt={data.core}
          />
          <div className="benefit">{renderImagesInText(data.benefit)}</div>
        </div>
        <div className="middle-column">
          <div className="name">{data.name.toUpperCase()}</div>
          <div className="type">{data.type}</div>
        </div>
        <div className="right-column">
          <img
            className="type-icon"
            src={require(`../assets/icons/Item.png`)}
            alt="item"
          />
        </div>
      </div>
      <div className="lower-container">
        <img
          className="worker"
          src={require(`../assets/icons/Worker${data.worker}-v2.png`)}
          alt="meeple"
        />
        <div className="card-id">{data.number}</div>
        <div className="ability">
          <div>{renderImagesInText(data.ability)}</div>
        </div>
        <div className="coin-wrapper">
          <img
            className="coin-icon"
            src={require(`../assets/icons/Coin.png`)}
            alt="coin"
          />
          <div className="coin-value">{data.coins}</div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
