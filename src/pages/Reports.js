import React from "react";
import "../css/Reports.css";
import RepCard from "../components/reports/RepCard";
import Tab from "../components/team/tabbar/Tab";
import TabContent from "../components/team/tabbar/TabContent";
import GithubReport from "../assets/reports/github-24-1.pdf";
import GithubEvent from "../assets/Events/gitgithub.png";
import Webdev from "../assets/Events/htmlcss.jpeg";
import Orientation from "../assets/Events/or1.jpg";
import WebdevReport from "../assets/reports/Webdev.pdf";
function Reports() {
  return (
    <>
      <div className="gbc1"></div>
      <ul className="nav nav-tabs justify-content-center" role="tablist"  style={{marginTop:"150px"}}>
        <Tab
          className="nav-link tab-btn active"
          id="year2023-tab"
          targetID="#year2023-tab-pane"
          title="2024 - 2025"
          selected="true"
        />
        <Tab
          className="nav-link tab-btn"
          id="year2024-tab"
          targetID="#year2024-tab-pane"
          title="2025 - 2026"
          selected="false"
        />
      </ul>
      <div className="tab-content">
        <TabContent
          id="year2023-tab-pane"
          tab="year2023-tab"
          className="tab-pane fade show active"
          content={
            <section className="section">
              <div className="container">
                <div className="bbc1"></div>
                <div className="row">
                  <div className="text-center">
                    <div className="section-title">
                      <h1>
                        Our{" "}
                        <span style={{ color: "var(--secondary-color)" }}>
                          Event Reports</span>
                      </h1>
                    </div>
                  </div>
                </div>
                <ul
                  className="nav nav-tabs justify-content-center"
                  role="tablist"
                >
                  <Tab
                    className="nav-link tab-btn active"
                    id="internal-tab"
                    targetID="#internal-tab-pane"
                    title="Internal Meets"
                    selected="false"
                  />
                  <Tab
                    className="nav-link tab-btn"
                    id="events-tab"
                    targetID="#events-tab-pane"
                    title="Events"
                    selected="false"
                  />
                </ul>
                <div className="tab-content tab-btn">
                  <TabContent
                    id="events-tab-pane"
                    tab="events-tab"
                    className="tab-pane fade show"
                    content={
                      <>
                      <RepCard
                          imgSrc="https://srmsigkdd-cdn.netlify.app/images/hodback.jpeg"
                          name="Hack Of Duty"
                          role="28-29 October 2024"
                          pdfURL="#"
                        />
                      <RepCard
                          imgSrc="https://srmsigkdd-cdn.netlify.app/images/inauguration.jpg"
                          name="Inauguration"
                          role="30 August 2024"
                        />
                        <RepCard
                          imgSrc="https://srmsigkdd-cdn.netlify.app/images/techtalk.jpg"
                          name="Tech Talk"
                          role="30 August 2024"
                          pdfURL="#"
                        />
                        <RepCard
                          imgSrc="https://srmsigkdd-cdn.netlify.app/images/treasurehunt.jpg"
                          name="Treasure Hunt"
                          role="30 August 2024"
                          pdfURL="#"
                        />
                      </>
                    }
                  />
                  <TabContent
                    id="internal-tab-pane"
                    tab="internal-tab"
                    className="tab-pane fade active show"
                    content={
                      <>
                        <RepCard
                          imgSrc={Orientation}
                          name="Orientation [First Batch]"
                          role="28 March 2024"
                        />
                        <RepCard
                          imgSrc={GithubEvent}
                          name="Git and GitHub Session"
                          role="3 April 2024"
                          pdfURL={GithubReport}
                        />
                        <RepCard
                          imgSrc={Webdev}
                          name="Web Development Session"
                          role="15 April 2024"
                          pdfURL={WebdevReport}
                        />
                      </>
                    }
                  />
                </div>
              </div>
            </section>
          }
        />
        <TabContent
          id="year2024-tab-pane"
          tab="year2024-tab"
          className="tab-pane fade show"
          content={
            <section className="section" style={{ paddingTop: "40px" }}>
              <div className="container">
                <div className="row">
                  <div className="text-center">
                    <div className="section-title">
                      <h1>
                        Next Year Reports{" "}
                        <span style={{ color: "var(--secondary-color)" }}>
                          Comming soon...
                        </span>
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          }
        />
      </div>
    </>
  );
}

export default Reports;
