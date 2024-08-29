import React from "react";
import ProjectCard from "../components/projects/ProjectCard";
import "../css/Projects.css";
import DashboardImg from "../assets/Images/dash.png";
import RecWebsite from "../assets/Images/rec.png";

function Projects() {
  return (
    <>
      <section className="landing-section section h-70vh" style={{ marginTop: "220px" }}>
        <div className="container" style={{ marginTop: "-110px" }}>
          <div className="gbc1"></div>
          <div className="row justify-content-center text-center">
            <div className="col-lg-10 text-center mobtitle">
              <h1 className="title mobprojtitle " style={{ marginBottom: "40px" }}>
                Our{" "}
                <span style={{ color: "var(--secondary-color)", textShadow: "0 0 10px #57abd7, 0 0 20px #57abd7" }}>
                  Projects
                </span>{" "}
              </h1>
            </div>
          </div>
          <div className="proj-card-container">
            <ProjectCard
              imgSrc={RecWebsite}
              title="Recruitment Website"
              role="25 August 2024"
              Mediumlink="https://github.com/ACM-SIGKDD-SRM-KTR-STUDENT-CHAPTER/Recruitments"
            />
            <ProjectCard
              imgSrc={DashboardImg}
              title="Recruitment Dashboard"
              role="25 August 2024"
              Mediumlink="https://github.com/ACM-SIGKDD-SRM-KTR-STUDENT-CHAPTER/Recruitment-Dashboard"
            />
            <ProjectCard
              imgSrc="https://miro.medium.com/v2/resize:fit:1400/1*tL7cirx4VR8coRg5XLwMVw.gif"
              title="Keyword Extraction"
              role="9 August 2024"
              Mediumlink="https://github.com/mushir2004/Keyword-extraction"
            />
            <ProjectCard
              imgSrc="https://private-user-images.githubusercontent.com/143888880/356899035-3afd50ad-4311-4882-a75d-1acd600c58cd.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjQ5NTEwMDMsIm5iZiI6MTcyNDk1MDcwMywicGF0aCI6Ii8xNDM4ODg4ODAvMzU2ODk5MDM1LTNhZmQ1MGFkLTQzMTEtNDg4Mi1hNzVkLTFhY2Q2MDBjNThjZC5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwODI5JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDgyOVQxNjU4MjNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0xMDIwZTk1M2I5ZmNhYzRmYWFhYWQxZWNiMTZlZjE2YTE1MDc1ZmVlMmZhODZlZDM5MWZjY2VjN2MzNTk4MjVlJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.iZnqBgNDJ3Vzjw6l6ofN1fdjQR86vOv1pHPALXP0pgU"
              title="ACM FARM HEALTH'24"
              role="12 August 2024"
              Mediumlink="https://github.com/Srijansarkar17/ACM_FarmHealth"
            />
            <ProjectCard
              imgSrc="https://private-user-images.githubusercontent.com/143888880/349614867-81c8cb8c-97a9-4ecd-97ea-3ecfef516d42.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjQ5NTI4NzIsIm5iZiI6MTcyNDk1MjU3MiwicGF0aCI6Ii8xNDM4ODg4ODAvMzQ5NjE0ODY3LTgxYzhjYjhjLTk3YTktNGVjZC05N2VhLTNlY2ZlZjUxNmQ0Mi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwODI5JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDgyOVQxNzI5MzJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1mM2YzYzQ0NzFjZjljNTJlY2E5Y2ZkMzNlMDdmMDlkYzAxY2U0Y2Y3N2I3MmJjYjkwMGVlNzVhMWUxMzMzN2U5JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.9QNTAHdQcNvHvxiw-JxAyicQEVVOm6YxK4lOXgTOUJE"
              title="Automatic Colorization of Photos using Deep Neural Networks"
              role="18 July 2024"
              Mediumlink="https://github.com/Adityapratapsingh28/Automatic-Colorization-of-Photos-using-Deep-Neural-Networks"
            />
            <ProjectCard
              imgSrc="https://www.citlprojects.com/hs-fs/hubfs/blogs/deblurring-blurred-image-gan-cnn.jpg?width=616&height=412&name=deblurring-blurred-image-gan-cnn.jpg"
              title="Image Deblurring using GAN"
              role="16 July 2024"
              Mediumlink="https://github.com/armaanranjan/IMAGE-DEBLURRING-USING-GAN"
            />
            <ProjectCard
              imgSrc="https://s3.amazonaws.com/aurochssolutions.com-images/sales_forecasting_01_10ee95f93b.jpeg"
              title="Sales Forecasting"
              role="7 April 2024"
              Mediumlink="https://github.com/ACM-SIGKDD-SRM-KTR-STUDENT-CHAPTER/R-D-Projects-April-2024/tree/main/Sales%20Forecasting"
            />
            <ProjectCard
              imgSrc="https://editor.analyticsvidhya.com/uploads/32086heading.jpeg"
              title="SMS Spam Detection"
              role="7 April 2024"
              Mediumlink="https://github.com/ACM-SIGKDD-SRM-KTR-STUDENT-CHAPTER/R-D-Projects-April-2024/tree/main/SMS%20Spam%20Detection"
            />
            <ProjectCard
              imgSrc="https://raw.githubusercontent.com/ADITYAVOFFICIAL/Official_Website/main/public/ss.png"
              title="SRMIST KTR ACM SIGKDD Student Chapter Website"
              role="24 March 2024"
              Mediumlink="https://github.com/ACM-SIGKDD-SRM-KTR-STUDENT-CHAPTER/Official_Website"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
