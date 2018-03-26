import React from "react";
import "./scoreDiv.css";

const Score = props => 
	<div className="scoreDiv">
		<p id="msg">{props.message}</p>
		<span>Score: {props.score} |</span>
		<span> Your Best: {props.highScore}</span>
	</div>;

export default Score;
