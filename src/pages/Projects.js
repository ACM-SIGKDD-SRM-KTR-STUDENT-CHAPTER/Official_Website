import React, { useEffect, useState } from "react";
import ProjectCard from "../components/projects/ProjectCard";
import "../css/Projects.css";

function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        // Fetch project data from the API
        const fetchProjects = async () => {
            try {
                const response = await fetch(process.env.REACT_APP_PROJECTS_URL);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                // Sort projects by id in descending order
                data.sort((a, b) => b.id - a.id);
                setProjects(data);
            } catch (error) {
                console.error('Error fetching project data:', error);
            }
        };

        fetchProjects();
    }, []);

    // Function to format the date
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { day: '2-digit', month: 'long', year: 'numeric' };
        return date.toLocaleDateString('en-GB', options);
    };

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
                        {projects.map(project => (
                            <ProjectCard
                                key={project.id}
                                imgSrc={project.proj_image}
                                title={project.title}
                                role={formatDate(project.date)}
                                Mediumlink={project.github_link}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Projects;
