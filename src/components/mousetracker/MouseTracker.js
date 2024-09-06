import React, { useEffect, useState } from "react";
import "./MouseTracker.css"; // Import CSS for styling

const MouseTracker = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Function to check if the device is mobile
  const isMobileDevice = () => {
    return window.innerWidth <= 768; // You can adjust the breakpoint as needed
  };

  useEffect(() => {
    // If it's a mobile device, don't set up the mouse move listener
    if (isMobileDevice()) {
      return;
    }

    let animationFrameId;

    const handleMouseMove = (event) => {
      // Cancel the previous frame
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }

      // Request a new animation frame
      animationFrameId = requestAnimationFrame(() => {
        setMousePosition({ 
          x: event.clientX, 
          y: event.clientY + window.scrollY // Adjust for scroll position
        });
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      // Clean up the animation frame on component unmount
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  // If it's a mobile device, return null to avoid rendering
  if (isMobileDevice()) {
    return null;
  }

  return (
    <div
      className="glow-mouse"
      style={{
        left: mousePosition.x,
        top: mousePosition.y,
        position: "absolute",
        pointerEvents: "none", // Prevent blocking mouse events
        transform: "translate(-50%, -50%)", // Center the glow on the mouse cursor
      }}
    />
  );
};

export default MouseTracker;
