import React from "react";
import "./Card.css";

const Card = props => (
  <div  className={props.shuffle === true ? "card animated flipInX" : "card animated flipInY"}>
    <div className="img-container">
      <a onClick={() => props.detectionAlert(props.name)}>
        <img alt={props.name} src={props.image}/>
        <div className="overlay"></div>
      </a>
    </div>
  </div>
);

export default Card;