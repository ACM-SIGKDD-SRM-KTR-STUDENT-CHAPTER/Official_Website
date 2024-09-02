import React from "react";
import { Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarWeek, faLocationDot, faComments, faVideoCamera, faPeopleGroup } from "@fortawesome/free-solid-svg-icons";

function EventCard({ imgSrc, title, fromDate, toDate, location, link, typeOfEvent, isOffline }) {
    const currentDate = new Date();
    const eventDate = new Date(fromDate);
    const endDate = toDate ? new Date(toDate) : null;

    return (
        <Card className="event-card position-relative">
            <Card.Img variant="top" src={imgSrc} />
            {eventDate > currentDate && (
                <div className="upcoming-label position-absolute top-0 end-0 m-2 p-1 bg-warning text-dark rounded">
                    Upcoming Event
                </div>
            )}
            <Card.Body className="eventcardbody">
                <Card.Title className="event-title">{title}</Card.Title>
                <Card.Text className="event-desc">
                    <strong><FontAwesomeIcon icon={faCalendarWeek} style={{ marginRight: "4px" }} /> </strong> 
                    {`${formatDate(fromDate)}${endDate ? ` to ${formatDate(toDate)}` : ''}`}<br />
                    <strong><FontAwesomeIcon icon={faLocationDot} style={{ marginRight: "4px" }} /> Location: </strong> {location}<br />
                    <strong><FontAwesomeIcon icon={faComments} style={{ marginRight: "4px" }} /> Type: </strong> {typeOfEvent}<br />
                    <FontAwesomeIcon icon={isOffline ? faPeopleGroup : faVideoCamera} style={{ marginRight: "4px" }} />
                    {isOffline ? "Offline" : "Online"} Event
                </Card.Text>
                <Button variant="primary" className="proj-button btn" href={link} target='_blank' rel='noopener noreferrer'>
                    View Event Details
                </Button>
            </Card.Body>
        </Card>
    );
}

function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' }); // Use 'short' for abbreviated month
    const year = date.getFullYear().toString().slice(-2); // Get last two digits of the year

    return `${day} ${month} '${year}`;
}

export default EventCard;
