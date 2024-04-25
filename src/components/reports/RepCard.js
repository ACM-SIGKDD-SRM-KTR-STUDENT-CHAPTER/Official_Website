import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./RepCard.css";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

function RepCard(props) {
  return (
    <div className="col-lg-3 ml-auto mr-auto mainn">
      <div className="custom-card-rep card text-center">
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.role}</p>
          {props.pdfURL && (
            <a href={props.pdfURL} target="_blank" rel="noreferrer" className="connect-button btn">
              <FontAwesomeIcon icon={faFilePdf} style={{ marginRight: "2px" }} />
              View
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default RepCard;
