import React, { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";
import { NavLink } from "react-router-dom";
import CreatorCard from "./CreatorCard";
import "./Footer.css";

function Footer() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          "https://api.weatherapi.com/v1/current.json",
          {
            params: {
              key: process.env.REACT_APP_WEATHER_API_KEY,
              q: "Chengalpattu"
            }
          }
        );
        setWeatherData(response.data.current);
      } catch (error) {
        console.error("Error fetching weather data", error);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <>
      <footer>
        <div className="main-footer container">
          <div className="row">
            <div className="col-lg-12 mx-auto">
              <div className="footer-container d-flex flex-wrap justify-content-evenly text-center">
                <div className="col-lg-3">
                  <h3 className="footer-section-title">Follow Us</h3>
                  <ul className="social-links list-unstyled text-center pt-4">
                    <li className="list-inline-item">
                      <a href="https://github.com/ACM-SIGKDD-SRM-KTR-STUDENT-CHAPTER" target="_blank" rel="noreferrer">
                        <i className="bi bi-github"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="https://www.linkedin.com/company/acmsigkddsrm" target="_blank" rel="noreferrer">
                        <i className="bi bi-linkedin"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="https://www.instagram.com/srmsigkdd" target="_blank" rel="noreferrer">
                        <i className="bi bi-instagram"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="https://twitter.com/srmsigkdd" target="_blank" rel="noreferrer">
                        <i className="bi bi-twitter"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="https://srmsigkddlinktree.vercel.app/" target="_blank" rel="noreferrer">
                        <i className="bi bi-tree-fill"></i>
                      </a>
                    </li>
                  </ul>
                  <p className="bottom-line">Get. Set. Discover</p>
                </div>
                <div className="col-lg-5">
                  <h3 className="footer-section-title">Contact Us</h3>
                  <ul className="contact-list list-unstyled">
                    <li className="list-item">
                      <i className="bi bi-envelope"></i>
                      <a style={{fontWeight:"500",fontSize:"18px"}} href="mailto:srmsigkdd@gmail.com">
                        srmsigkdd@gmail.com
                      </a>
                    </li>
                    <li className="list-item">
                      <i className="bi bi-geo-alt-fill"></i>
                      <a style={{fontWeight:"500",fontSize:"18px"}} href="https://www.google.com/maps/place/SRM+University,+Kattankulathur,+Tamil+Nadu+603203/@12.8194041,80.0367139,17z/data=!3m1!4b1!4m6!3m5!1s0x3a52f76c4db87a47:0x341fa471f8027d68!8m2!3d12.8193124!4d80.0393459!16s%2Fg%2F11f7b3plgj?entry=ttu">UB, SRM Institute of Science and Technology, Kattankulkathur, Chennai [603203]
                      </a>
                    </li>
                    {weatherData && (
                      <>
                        <h4 className="footer-section-title" style={{fontSize:"20px",marginTop:"25px"}}>Weather @SRMIST KTR</h4>
                        <li className="list-item" style={{fontWeight:"500"}}>
                          <i className="bi bi-thermometer-half" style={{marginRight:"10px"}}></i> Temperature: {weatherData.temp_c}°C
                        </li>
                        <li className="list-item" style={{fontWeight:"500"}}>
                          <i className="bi bi-cloud" style={{marginRight:"10px"}}></i> Condition: {weatherData.condition.text}
                        </li>
                        <li className="list-item" style={{fontWeight:"500"}}>
                          <i className="bi bi-wind" style={{marginRight:"10px"}}></i> Wind: {weatherData.wind_kph} kph
                        </li>
                      </>
                    )}
                  </ul>
                </div>
                <div className="col-lg-3">
                  <h3 className="footer-section-title" style={{color:"white",fontWeight:"bold"}}>Developed By</h3>
                  <Carousel className="footer-carousel" fade indicators={false} controls={false} interval={2000}>
                    <Carousel.Item>
                      <CreatorCard
                        img="https://srmsigkdd-cdn.netlify.app/images/team_aditya.jpg"
                        title="Aditya Verma"
                        role="Chairperson"
                      />
                    </Carousel.Item>
                  </Carousel>
                </div>
              </div>
              <div className="copyright text-center">
                <p style={{ color: "white", fontWeight: "bold", marginRight: isMobile ? "0px" : "170px",marginTop:"-80px" }}>
                  &copy; {isMobile ? "2024" : "2024 Made with ☕ by"}
                  <NavLink to="#"> SRMIST ACM SIGKDD Student Chapter</NavLink>
                </p>
                <NavLink to="" className="btn quest-btn">WILDCARD RECRUITMENT</NavLink>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
