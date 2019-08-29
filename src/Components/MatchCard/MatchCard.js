import React from "react";
import "./MatchCards.css";

const MatchCard = props => (
    <div  className = "card">
        <div className = "img-container" >
        <img alt = {props.name} src ={props.images} id = {props.id} className ="card-img" onClick ={() => props.setClicked(props.id)}/>
        </div>
    </div>
);

export default MatchCard;