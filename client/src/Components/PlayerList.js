import React from "react";
import PlayerCard from "./PlayerCard";
import "./PlayerList.css";

const PlayerList = ({ players }) => {
  return (
    <div className="player-container">
      {players.map(e => {
        return <PlayerCard name={e.name} country={e.country} key={e.id} />;
      })}
    </div>
  );
};

export default PlayerList;
