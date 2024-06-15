import { renderImagesInText } from "./Card.jsx";

const convertToRoman = (num) => {
  const romanNumerals = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" },
  ];

  let result = "";

  for (let i = 0; i < romanNumerals.length; i++) {
    while (num >= romanNumerals[i].value) {
      result += romanNumerals[i].symbol;
      num -= romanNumerals[i].value;
    }
  }

  return result;
};

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
            src={require(`../assets/icons/Team-X.png`)}
            alt={`Team ${data.team}`}
          />
          <div className="team-number">{convertToRoman(data.team)}</div>
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
      {data.expansion !== "core" && <img className="expansion-icon" src={require(`../assets/icons/${data.expansion}-expansion.png`)} alt={`${data.expansion} expansion`}/>}
    </div>
  );
};

export default StartingCard;
