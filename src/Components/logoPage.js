import React, { useState, useEffect, useRef } from "react";
import TextScramble from "@twistezo/react-text-scramble";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import ArrowCircleDownOutlinedIcon from "@mui/icons-material/ArrowCircleDownOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import StarterMousedot from "./starterMouseDot"

const LogoPage = ({ setDone }) => {
  const [showPage, setShowPage] = useState(false);

  const arrowRef = useRef(null); // Create a ref to attach to the element
  const [arrowPosition, setArrowPosition] = useState({ x: 0, y: 0 }); // State to store the x and y coordinates


  const [isAtPosition, setIsAtPosition] = useState(false);

  const updatePosition = () => {
    if (arrowRef.current) {
      const rect = arrowRef.current.getBoundingClientRect(); // Get the bounding rectangle
      setArrowPosition({ x: rect.left, y: rect.top }); // Update the state
    }
  };

  useEffect(() => {
    // Call updatePosition when the component mounts
    updatePosition();
    // Optionally add a resize event listener to update on window resize
    window.addEventListener("resize", updatePosition);

    return () => {
      window.removeEventListener("resize", updatePosition); // Cleanup event listener
    };
  }, []);

  useEffect(() => {
    function handleScroll() {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;

      // Check if user has scrolled to the desired position (250 pixels from the top)
      if (scrollTop) {
        setIsAtPosition(true);
        handleClick();
      } else {
        setIsAtPosition(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Empty dependency array ensures the effect runs only once on mount

  useEffect(() => {
    if (isAtPosition) {
      // Perform your action here
      console.log("Reached the desired position (250 pixels from the top)!");
      // You can replace console.log with any action you want to trigger
    }
  }, [isAtPosition]);

  const handleClick = () => {
    setTimeout(() => {
      setShowPage(true);
      setTimeout(() => {
        setDone(true);
      }, 700);
    }, 0);
  };
  const texts = [
    "Web Developer",
    "android developer",
    "ML Engineer",
    "Game Developer",
  ];

  return (
    <>
    <StarterMousedot arrowLocation={arrowPosition}/>
    <div
      className="App logoPage"
      style={{
        backgroundColor: "black",
        display: "flex",
        width: "100vw",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "4.2rem",
        color: "rgb(181, 190, 203)",
        flexDirection: "column",
        overflowX: "hidden",
        fontFamily: "monospace",
      }}
      onClick={handleClick}
    >
      <div className={`page ${showPage ? "showStarterPage" : ""}`}></div>
      <div
        className={`typing-text ${showPage ? "topTheText" : ""}`}
        id="hello"
        style={{ position: "relative", zIndex: "1" }}
      >
        <TextScramble texts={texts} letterSpeed={10} nextLetterSpeed={200} />
      </div>
      <div
        className={`downArrow ${showPage ? "topTheText" : ""}`}
        onClick={handleClick}
        ref={arrowRef}
      >
        <ExpandMoreOutlinedIcon
          className="homeScrollBtn downArrow"
          style={{
            fontSize: "4rem",
            marginBottom: "-18rem",
            color: "rgba(148, 143, 143, 0.9)",
            position: "relative",
            zIndex: "1",
          }}
        />
      </div>
    </div>
    </>
  );
};

export default LogoPage;
