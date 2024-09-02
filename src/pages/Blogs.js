import React, { useEffect, useState } from "react";
import Blogcard from "../components/blogs/blogcard/Blogcard";
import { Alert } from "react-bootstrap";
import "../css/Blogs.css";

function Blogs() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch blog data from the API
        const fetchBlogs = async () => {
            try {
                const response = await fetch(process.env.REACT_APP_BLOGS_URL);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setBlogs(data);
            } catch (error) {
                setError('Error fetching blog data. Please try again later.');
                console.error('Error fetching blog data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    return (
        <>
            <section className="landing-section section h-70vh" style={{ marginTop: "220px" }}>
                <div className="container" style={{ marginTop: "-110px" }}>
                    <div className="gbc1"></div>
                    <div className="row justify-content-center text-center">
                        <div className="col-lg-10 text-center mobtitle">
                            <h1 className="title mobblogtitle" style={{ marginBottom: "40px" }}>
                                Our{" "}
                                <span style={{ color: "var(--secondary-color)", textShadow: "0 0 10px #57abd7, 0 0 20px #57abd7" }}>
                                    Blogs
                                </span>{" "}
                            </h1>
                        </div>
                    </div>
                    <div className="blog-card-container">
                        {loading ? (
                            <div className="text-center loading-container">
                                <div className="loader"></div> {/* Custom spinner */}
                                <p className="loading-text">Loading blogs...</p>
                            </div>
                        ) : error ? (
                            <Alert variant="danger">
                                {error}
                            </Alert>
                        ) : (
                            blogs.map(blog => (
                                <Blogcard
                                    key={blog.id}
                                    imgSrc={blog.image_url}
                                    title={blog.blog_name}
                                    aboutblog={blog.author}
                                    role={blog.position}
                                    Mediumlink={blog.medium_link}
                                />
                            ))
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Blogs;
