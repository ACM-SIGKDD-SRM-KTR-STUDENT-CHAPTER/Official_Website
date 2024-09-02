import React from "react";
import { Button } from "react-bootstrap";
import "../../css/Events.css";

function EventPagination({ currentPage, totalPages, onPageChange }) {
    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            onPageChange(page);
            window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top
        }
    };

    return (
        <div className="pagination-wrapper">
            <div className="pagination">
                <Button 
                    variant="primary" 
                    className={`proj-button btn pagination-button`} 
                    onClick={() => handlePageChange(currentPage - 1)} 
                    disabled={currentPage === 1}
                >
                    Prev
                </Button>
                {[...Array(totalPages).keys()].map(page => (
                    <Button
                        key={page + 1}
                        variant="primary" 
                        className={`proj-button btn pagination-item ${page + 1 === currentPage ? 'active' : ''}`}
                        onClick={() => handlePageChange(page + 1)}
                    >
                        {page + 1}
                    </Button>
                ))}
                <Button 
                    variant="primary" 
                    className={`proj-button btn pagination-button`} 
                    onClick={() => handlePageChange(currentPage + 1)} 
                    disabled={currentPage === totalPages}
                >
                    Next
                </Button>
            </div>
        </div>
    );
}

export default EventPagination;
