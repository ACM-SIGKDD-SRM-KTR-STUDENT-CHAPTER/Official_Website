import React, { useEffect } from 'react';
import './Domains.css';
import RDLogo from "./images/rd.svg"
import Creatives from "./images/creatives.svg"
import WebApp from "./images/webapp.svg"
import Corp from "./images/corp.svg"
import "aos/dist/aos.css";
import AOS from 'aos';

function Domains() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Adjust the duration as needed
      once: true, // Only animate once
      easing: 'ease-in-out', // Easing type
    });
  }, []);

  return (
    <div className="domains-container">
      <h2 className="section-title domt" style={{marginBottom:"35px"}}>
        Explore our{" "}
        <span style={{ color: "var(--secondary-color)" }}>
          Domains
        </span>{" "}
      </h2>
      <div className="domains-grid">
        <div className="domain-card" data-aos="fade-up" data-aos-duration="1000">
          <div className="logo"><img src={RDLogo} className='image'/></div> {/* Placeholder for logo */}
          <h3>R&D</h3>
          <p>
            Research and Development domain involves exploring new ideas, technologies, and methodologies to drive innovation.
          </p>
        </div>
        <div className="domain-card" data-aos="fade-up" data-aos-duration="1000">
          <div className="logo"><img src={WebApp} className='image' /></div> {/* Placeholder for logo */}
          <h3>Web/App Dev</h3>
          <p>
          Developing and maintaining websites with intuitive user interface and seamless user experience along with precise server-side web application logic.
          </p>
        </div>
        <div className="domain-card" data-aos="fade-up" data-aos-duration="1000">
          <div className="logo" style={{marginBottom:"20px"}}><img src={Corp} className='image corp'/></div> {/* Placeholder for logo */}
          <h3>Corporate</h3>
          <p>
            Corporate domain deals with business strategies, management, operations, securing and maintaining sponsorships.
          </p>
        </div>
        <div className="domain-card" data-aos="fade-up" data-aos-duration="1000">
          <div className="logo"><img src={Creatives} className='image'/></div> {/* Placeholder for logo */}
          <h3>Creatives</h3>
          <p>
            Creatives domain involves artistic and design-oriented work, including graphic design, UI/UX design, and multimedia production.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Domains;
