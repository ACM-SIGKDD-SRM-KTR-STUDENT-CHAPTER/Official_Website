import React, { useState } from "react";
import { Form, Button, Alert, Row, Col } from "react-bootstrap";
import CertificateCard from "../components/certificates/CertificateCard"; // Adjust the import path if needed
import "../css/Certificates.css"; // Adjust styles as needed
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Certificates = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    if (searchTerm.trim() === "") {
      setError("Please enter your registration number.");
      setResults([]);
      return;
    }
    setError("");
    try {
      const response = await fetch(
       `${process.env.REACT_APP_CERTIFICATES_URL}/${searchTerm}`
      );
      if (!response.ok) {
        throw new Error("Certificate not found.");
      }
      const data = await response.json();
  
      // Sort the data by id in descending order
      const sortedData = data.sort((a, b) => b.id - a.id);
  
      setResults(sortedData);
    } catch (error) {
      setError(error.message);
      setResults([]);
    }
  };
  

  return (
    <>
      <section className="landing-section section h-70vh" style={{ marginTop: "220px" }}>
        <div className="container" style={{ marginTop: "-110px" }}>
          <div className="row justify-content-center text-center">
            <div className="col-lg-10 text-center mobtitle">
              <h1 className="title mobeventtitle" style={{ marginBottom: "40px" }}>
                Verify{" "}
                <span
                  style={{
                    color: "var(--secondary-color)",
                    textShadow: "0 0 10px #57abd7, 0 0 20px #57abd7",
                  }}
                >
                  certificates
                </span>
              </h1>
            </div>
          </div>
          <Form onSubmit={handleSearch} className="search-container">
            <div className="search-input-group">
              <Form.Control
                type="text"
                placeholder="Enter your registration number"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              <Button
                variant="primary"
                type="submit"
                className="btn certsearch"
                style={{ marginTop: '10px' }} // Add margin if needed
              >
                <FontAwesomeIcon icon={faSearch} /> Search
              </Button>
            </div>
          </Form>
          {error && <Alert variant="danger">{error}</Alert>}
          {results.length > 0 && (
            <div className="results">
              <Row>
                {results.map((cert, index) => (
                  <Col key={index} className="mb-4">
                    <CertificateCard
                      nameOfEvent={cert.name_of_event}
                      typeOfEvent={cert.type_of_event}
                      position={cert.position}
                      fromDate={cert.from_date}
                      toDate={cert.to_date}
                      venue={cert.venue}
                      issueDate={cert.issue_date}
                      certificateId={cert.certificate_id}
                      nameOfPerson={cert.name_of_person}
                      registrationNumber={cert.registration_number}
                    />
                  </Col>
                ))}
              </Row>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Certificates;
