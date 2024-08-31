import React, { useEffect, useState } from "react";
import Blogcard from "../components/blogs/blogcard/Blogcard";
import "../css/Blogs.css";

function Blogs() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        // Fetch blog data from the API
        const fetchBlogs = async () => {
            try {
                const response = await fetch(process.env.REACT_APP_BLOGS_URL);
                const data = await response.json();
                setBlogs(data);
            } catch (error) {
                console.error('Error fetching blog data:', error);
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
                            <h1 className="title mobblogtitle " style={{ marginBottom: "40px" }}>
                                Our{" "}
                                <span style={{ color: "var(--secondary-color)", textShadow: "0 0 10px #57abd7, 0 0 20px #57abd7" }}>
                                    Blogs
                                </span>{" "}
                            </h1>
                        </div>
                    </div>
                    <div className="blog-card-container">
                        {blogs.map(blog => (
                            <Blogcard
                                key={blog.id}
                                imgSrc={blog.image_url}
                                title={blog.blog_name}
                                aboutblog={blog.author}
                                role={blog.position}
                                Mediumlink={blog.medium_link}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Blogs;
