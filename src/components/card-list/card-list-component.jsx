import React from "react";
import "./card-list.styles.css";
import { Card } from "../card-component/card-component";

export const CardList = (props) => {
  return (
    <div className="card-list">
      {props.creatures.map((creature) => (
        <Card creature={creature}></Card>
      ))}
    </div>
  );
};
