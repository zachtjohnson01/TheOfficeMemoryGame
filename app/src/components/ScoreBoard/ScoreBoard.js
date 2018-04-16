import React from "react";
import "./ScoreBoard.css";

const ScoreBoard = props => (
    <div>
        <ul className="nav nav-pills nav-justified">
            <li><a href="/"><img className="animated tada" src="https://vignette.wikia.nocookie.net/theoffice/images/3/3c/Theofficesign.png/revision/latest/scale-to-width-down/200?cb=20091221154126" alt="theOffice"/></a></li>
            <li className={props.message.indexOf("!") !== -1 ? "font-orange animated tada" : 
                           props.message.indexOf(".") !== -1 ? "font-green animated pulse" : "font-white"}>
            {props.message}</li>
            <li>Score: {props.newScore} <span className="font-white">| Top Score: {props.topScore}</span></li>
        </ul>
    </div>
);
export default ScoreBoard;