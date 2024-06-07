import React, { useEffect } from 'react';
import './Charter.css';
import "aos/dist/aos.css";
import AOS from 'aos';
import CertImg from '../../../assets/Images/charter_cert.png';

function Charter() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Adjust the duration as needed
      once: true, // Only animate once
      easing: 'ease-in-out', // Easing type
    });
  }, []);

  return (
    <div className="charter-container">
      <h2 className="section-title charter-title" style={{marginTop:"20px"}}>
        Charter{" "}
        <span style={{ color: "var(--secondary-color)",textShadow: "0 0 10px #57abd7, 0 0 20px #57abd7" }}>
          Certificate
        </span>{" "}
      </h2>
      <img src={CertImg} alt="Charter Certificate" className="charter-cert" data-aos="fade-up" />
    </div>
  );
}

export default Charter;
