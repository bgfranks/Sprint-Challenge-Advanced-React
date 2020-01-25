import React from "react";

const PlayerCard = ({ name, country }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{country}</p>
    </div>
  );
};

export default PlayerCard;
