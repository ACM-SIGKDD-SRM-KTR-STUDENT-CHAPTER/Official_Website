import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./ProjectCard.css"

function ProjectCard(props) {
  return (
    <div className="proj-card-container">
      <Card className='proj-card' style={{ width: '18rem', marginBottom: '20px', position: 'relative' }}>
        <Card.Img variant="top" src={props.imgSrc} style={{ borderRadius: "13px" }} />
        <Card.Body className='proj-body'>
          <Card.Title className='proj-title' style={{color:"white",fontFamily:"Syne",fontWeight:"bold",fontSize:"21px"}}>{props.title}</Card.Title>
          <Card.Text className='proj-text' style={{color:"white"}}>{props.aboutproj}</Card.Text>
          <p style={{marginBottom:"25px"}}></p>
          <Card.Subtitle className='proj-role'>{props.role}</Card.Subtitle>
          <div className="button-container">
          <Button variant="primary" className="proj-button btn" target='_blank' rel='noreffer' href={props.Mediumlink}>Github Link</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProjectCard;
