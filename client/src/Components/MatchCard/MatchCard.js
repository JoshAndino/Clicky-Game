import React from "react";
import "./MatchCards.css";

const MatchCard = props => (
    <div onClick ={() => props.setClicked(props.id)} className = "card">
        <div className = "img-container">
        <img alt = {props.name} src ={props.images} className ="card-img" />
        </div>
    </div>
);

export default MatchCard;