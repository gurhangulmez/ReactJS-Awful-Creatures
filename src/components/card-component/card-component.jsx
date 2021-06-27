import React from "react";
import "./card.styles.css";

export const Card = (props) => {
  return (
    <div className="card-container">
      <img src={`https://robohash.org/${props.creature.id}?set=set4`}></img>
      <h1 key={props.creature.id}>{props.creature.name}</h1>
      <p>{props.creature.email}</p>
    </div>
  );
};
