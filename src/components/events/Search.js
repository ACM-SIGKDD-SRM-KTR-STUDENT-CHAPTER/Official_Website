import React, { useState, useEffect } from "react";
import { FormControl, InputGroup, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "../../css/Events.css"; // Import necessary CSS if needed

const Search = ({ searchQuery, setSearchQuery, filterOptions, setFilterOptions }) => {
    const [eventTypes, setEventTypes] = useState([]);
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        // Fetch event types and locations from the API or define them statically
        const fetchFilters = async () => {
            try {
                const response = await fetch(process.env.REACT_APP_EVENTS_URL);
                if (!response.ok) {
                    throw new Error("Failed to fetch event data");
                }
                const data = await response.json();
                const types = [...new Set(data.map(event => event.type_of_event))];
                const locations = [...new Set(data.map(event => event.event_venue))];
                setEventTypes(types);
                setLocations(locations);
            } catch (error) {
                console.error("Error fetching filter data:", error);
            }
        };

        fetchFilters();
    }, []);

    const handleTypeChange = (e) => {
        setFilterOptions(prev => ({ ...prev, type: e.target.value }));
    };

    const handleLocationChange = (e) => {
        setFilterOptions(prev => ({ ...prev, location: e.target.value }));
    };
    return (
        <div className="events-search-container">
            <InputGroup className="events-search-input-group">
                <FormControl
                    placeholder="Search events..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="events-search-input"
                />
                <InputGroup.Text className="events-search-icon">
                    <FontAwesomeIcon icon={faSearch} />
                </InputGroup.Text>
            </InputGroup>

            <div className="events-filter-group-container designfield">
                <Form.Group className="events-filter-group">
                    <Form.Control className="designfield" as="select" onChange={handleTypeChange}>
                        <option value="">Type of event</option>
                        {eventTypes.map((type, index) => (
                            <option key={index} value={type}>{type}</option>
                        ))}
                    </Form.Control>
                </Form.Group>

                <Form.Group className="events-filter-group">
                    <Form.Control className="designfield" as="select" onChange={handleLocationChange}>
                        <option value="">All Locations</option>
                        {locations.map((location, index) => (
                            <option key={index} value={location}>{location}</option>
                        ))}
                    </Form.Control>
                </Form.Group>
            </div>
        </div>
    );
};

export default Search;
