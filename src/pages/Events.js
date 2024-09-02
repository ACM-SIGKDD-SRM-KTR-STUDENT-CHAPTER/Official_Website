import React, { useEffect, useState } from "react";
import EventCard from "../components/events/EventCard";
import EventPagination from "../components/events/EventPagination";
import Search from "../components/events/Search"; // Import the Search component
import { Alert } from "react-bootstrap";
import "../css/Events.css";

function Events() {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [filterOptions, setFilterOptions] = useState({ type: "", location: "" }); // Removed date
    const [currentPage, setCurrentPage] = useState(1);
    const eventsPerPage = 5;

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await fetch(process.env.REACT_APP_EVENTS_URL);
                if (!response.ok) {
                    throw new Error("Failed to fetch events");
                }
                const data = await response.json();
                setEvents(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchEvents();
    }, []);

    const filteredEvents = events.filter(event => {
        return (
            event.event_title.toLowerCase().includes(searchQuery.toLowerCase()) &&
            (filterOptions.type ? event.type_of_event === filterOptions.type : true) &&
            (filterOptions.location ? event.event_venue === filterOptions.location : true)
        );
    });

    const sortedEvents = filteredEvents.sort((a, b) => b.id - a.id);

    const totalPages = Math.ceil(sortedEvents.length / eventsPerPage);
    const displayedEvents = sortedEvents.slice((currentPage - 1) * eventsPerPage, currentPage * eventsPerPage);

    return (
        <>
            <section className="landing-section section h-70vh" style={{ marginTop: "220px" }}>
                <div className="container" style={{ marginTop: "-110px" }}>
                    <div className="row justify-content-center text-center">
                        <div className="col-lg-10 text-center mobtitle">
                            <h1 className="title mobeventtitle" style={{ marginBottom: "40px" }}>
                                Our{" "}
                                <span style={{ color: "var(--secondary-color)", textShadow: "0 0 10px #57abd7, 0 0 20px #57abd7" }}>
                                    Events
                                </span>{" "}
                            </h1>
                        </div>
                    </div>
                    <Search
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                        filterOptions={filterOptions}
                        setFilterOptions={setFilterOptions}
                    />
                    <div className="event-card-container">
                        {loading ? (
                            <div className="text-center loading-container">
                                <div className="loader"></div> {/* Custom spinner */}
                                <p className="loading-text">Loading events...</p>
                            </div>
                        ) : error ? (
                            <Alert variant="danger">
                                {error}
                            </Alert>
                        ) : displayedEvents.length > 0 ? (
                            displayedEvents.map(event => (
                                <EventCard
                                    key={event.id}
                                    imgSrc={event.event_image_link}
                                    title={event.event_title}
                                    fromDate={event.from_date}
                                    toDate={event.to_date}
                                    location={event.event_venue}
                                    link={event.event_link}
                                    typeOfEvent={event.type_of_event}
                                    isOffline={event.is_offline}
                                />
                            ))
                        ) : (
                            <div className="no-events-found">
                                <p>⚠️ No events found</p>
                            </div>
                        )}
                    </div>
                    <EventPagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={setCurrentPage}
                    />
                </div>
            </section>
        </>
    );
}

export default Events;
