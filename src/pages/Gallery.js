import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import "../css/Gallery.css";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_GALLERY_URL);
        const data = await response.json();
        setImages(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching images:", error);
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  // Sort images by id in descending order
  const sortedImages = images.sort((a, b) => b.id - a.id);

  return (
    <section className="landing-section-gallery section h-70vh lan" style={{ marginBottom: "70px" }}>
      <Container>
        <div className="text-center">
          <h1 className="title mobeventtitle galtitile" style={{ marginBottom: "40px" }}>
            Our{" "}
            <span
              style={{
                color: "var(--secondary-color)",
                textShadow: "0 0 10px #57abd7, 0 0 20px #57abd7",
              }}
            >
              Gallery
            </span>
          </h1>
        </div>
        <Row>
          {loading ? (
            Array(6).fill().map((_, index) => (
              <Col key={index} sm={12} md={6} lg={4} className="mb-4">
                <Card className="image-card">
                  <Skeleton height={200} />
                  <Card.Body>
                    <Skeleton height={20} width="80%" style={{ margin: 'auto' }} />
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : sortedImages.length === 0 ? (
            <div className="no-images-found">
              <p>🖼️ No Images found</p>
            </div>
          ) : (
            sortedImages.map((image) => (
              <Col key={image.id} sm={12} md={6} lg={4} className="mb-4">
                <Card className="image-card">
                  <Card.Img variant="top" className="image-gallery" src={image.image_url} alt={image.title} />
                  <Card.Body>
                    <Card.Title style={{ textShadow: "0 0 10px #57abd7, 0 0 20px #57abd7" }} className="text-center img-title">
                      {image.title}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))
          )}
        </Row>
      </Container>
    </section>
  );
};

export default Gallery;
