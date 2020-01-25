import React from "react";
import "./PlayerCard.css";

const PlayerCard = ({ name, country }) => {
  return (
    <div className="card-container" data-testid="card-container">
      <h3>{name}</h3>
      <p>{country}</p>
    </div>
  );
};

export default PlayerCard;
