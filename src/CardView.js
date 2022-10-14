import React from "react";
import './CardView.css'

function CardView(props) {
  return (
    <div className="card">
        <img  src={`../Images/${props.image} `} className="card--image"/>
        <div className="card--status">
            {props.star && <img src="../star_icon.png" className="card--image--star"/>}
            <span>5.0</span>
            <span>(6).</span>
            <span>USA</span>
        </div>
        <p>{props.title}</p>
        <p><span className="bold">From $136 </span> per person</p>
    </div>
  );
}

export default CardView;
