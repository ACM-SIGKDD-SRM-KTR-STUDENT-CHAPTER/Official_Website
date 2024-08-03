import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub,faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./ProfileCard.css";

function ProfileCard(props) {
  return (
    <div className="col-lg-3 ml-auto mr-auto mainn">
      <div className="custom-card card text-center" >
        <img src={props.img} className="card-img-top" alt="..." style={{ border: "none" }}/>
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.role}</p>
          {props.linkedinUrl && (
            <a href={props.linkedinUrl} target="_blank" rel="noreferrer" className="connect-button btn">
              <FontAwesomeIcon icon={faLinkedin} style={{ marginRight: "2px" }} />
              LinkedIn
            </a>
          )}
          {props.githubUrl && (
            <a href={props.githubUrl} target="_blank" rel="noreferrer" className="connect-button btn" style={{ marginLeft: "10px" }}>
              <FontAwesomeIcon icon={faGithub} style={{ marginRight: "3px" }} />
              GitHub
            </a>
          )}
          {props.instagramUrl && (
            <a href={props.instagramUrl} target="_blank" rel="noreferrer" className="connect-button btn" style={{ marginLeft: "10px",fontSize:"15px" }}>
              <FontAwesomeIcon icon={faInstagram} style={{ marginRight: "3px" }} />
              Instagram
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
