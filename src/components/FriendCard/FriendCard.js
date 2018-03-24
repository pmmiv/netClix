import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className="card" onClick={() => props.check(props.id)}>
    <div className="img-container">
      <img alt='#' src={props.image} />
    </div>
  </div>
);

export default FriendCard;
