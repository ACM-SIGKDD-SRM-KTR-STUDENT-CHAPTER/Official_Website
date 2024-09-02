import React from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faLocationDot, faIdCard, faUser, faCircleCheck, faStamp, faListOl, faTicket, faStreetView } from "@fortawesome/free-solid-svg-icons";
import "../../css/Certificates.css"; // Ensure this path is correct

function CertificateCard({
    nameOfEvent, typeOfEvent, position, fromDate, toDate, venue, issueDate,
    certificateId, nameOfPerson, registrationNumber
}) {
    // If position is an empty string, set it to "Participation"
    const displayPosition = position || "Participant";

    return (
        <Card className="certificate-card position-relative">
            <Card.Body>
                <Card.Title style={{
                    color: "var(--secondary-color)",
                    textShadow: "0 0 5px #57abd7, 0 0 40px #57abd7",
                }} className="certificate-title">{nameOfEvent}</Card.Title>
                <Card.Text className="certificate-details">
                    <div className="detail-item">
                        <FontAwesomeIcon icon={faCalendar} className="icon" />
                        <strong>Event Dates: </strong>
                        {`${formatDate(fromDate)}${toDate ? ` to ${formatDate(toDate)}` : ''}`}
                    </div>
                    <div className="detail-item">
                        <FontAwesomeIcon icon={faLocationDot} className="icon" />
                        <strong>Venue: </strong> {venue}
                    </div>
                    <div className="detail-item">
                        <FontAwesomeIcon icon={faIdCard} className="icon" />
                        <strong>Certificate ID: </strong> {certificateId}
                    </div>
                    <div className="detail-item">
                        <FontAwesomeIcon icon={faUser} className="icon" />
                        <strong>Issued To: </strong> {nameOfPerson}
                    </div>
                    <div className="detail-item">
                        <FontAwesomeIcon icon={faListOl} className="icon" />
                        <strong>Registration Number: </strong> {registrationNumber}
                    </div>
                    <div className="detail-item">
                        <FontAwesomeIcon icon={faStamp} className="icon" />
                        <strong>Issue Date: </strong> {formatDate(issueDate)}
                    </div>
                    <div className="detail-item">
                        <FontAwesomeIcon icon={faTicket} className="icon" />
                        <strong>Type: </strong> {typeOfEvent}
                    </div>
                    <div className="detail-item">
                        <FontAwesomeIcon icon={faStreetView} className="icon" />
                        <strong>Position: </strong> {displayPosition}
                    </div>
                    <button variant="primary" className="btn certsearch certifiedbtn">
                        Certified by SRMIST SIGKDD Student Chapter <FontAwesomeIcon icon={faCircleCheck} className="icon" />
                    </button>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear().toString().slice(-2);

    return `${day} ${month} '${year}`;
}

export default CertificateCard;
