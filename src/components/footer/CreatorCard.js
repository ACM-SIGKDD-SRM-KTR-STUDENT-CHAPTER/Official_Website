import React from "react";
import "./CreatorCard.css";

function CreatorCard(props) {
  return (
    <>
      <div className="creator-card card">
        <img src={props.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h6 className="card-title">{props.title}</h6>
          <p className="card-text">
            {props.role}
          </p>
        </div>
        <div className="lastup">
          <div className="glowing-circle"></div>
          <p>Last Updated : 22/11/24 || 03:57pm</p>
        </div>
      </div>
    </>
  );
}

export default CreatorCard;
