import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import back1 from "../background-image/back1.png";
import github from "../background-image/github.jpg";
import linkedin from "../background-image/linked.webp";
import leetcode from "../background-image/LeetCode.png";
import LogoPage from "./logoPage";
import TextScramble, { ScrambleTexts } from '@twistezo/react-text-scramble'
import _ from 'lodash';


// import instagram from "../background-image/instagram.jpg";

const TypingEffect = ({ texts, interval, pauseInterval }) => {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    let timeout;

    const typeText = () => {
      if (reverse) {
        setDisplayText((prevText) => prevText.slice(0, -1));
      } else {
        setDisplayText((prevText) => prevText + texts[textIndex][charIndex]);
        setCharIndex((prevIndex) => prevIndex + 1);
      }
    };

    const resetText = () => {
      setCharIndex(0);
      setReverse(true);
    };

    const typingInterval = setInterval(() => {
      if (charIndex < texts[textIndex].length && !reverse) {
        typeText();
      } else {
        if (reverse) {
          if (displayText.length > 0) {
            typeText();
          } else {
            clearInterval(typingInterval);
            timeout = setTimeout(() => {
              resetText();
            }, pauseInterval);
          }
        } else {
          resetText();
        }
      }
    }, interval);

    return () => {
      clearInterval(typingInterval);
      clearTimeout(timeout);
    };
  }, [
    texts,
    textIndex,
    charIndex,
    interval,
    pauseInterval,
    reverse,
    displayText.length,
  ]);

  useEffect(() => {
    const autoChangeText = setInterval(() => {
      const nextIndex = (textIndex + 1) % texts.length;
      setTextIndex(nextIndex);
      setReverse(false);
      setDisplayText(""); // Reset display text before starting the new text
    }, texts.length * interval + pauseInterval);

    return () => {
      clearInterval(autoChangeText);
    };
  }, [textIndex, interval, pauseInterval, texts]);

  return (
    <div>
      <h1
        style={{
          color: "white",
          margin: "0",
          textAlign: "center",
          marginTop: "3rem",
          fontSize: "4rem",
        }}
      >
        {"."}
        {displayText}
      </h1>
    </div>
  );
};



const Starter = () => {
  const navigate = useNavigate();

  const textsToType = [
    "web developer",
    "android developer",
    "ai/ml engineer",
    "game developer",
    "data scientist",
  ];
  const [showPage, setShowPage] = useState(false);
  const [logoDone, setLogoDone] = useState(false);
  const [showStarter, setShowStarter] = useState(false);
  useEffect(() => {
    if (logoDone) {
      setShowStarter(true)
      setTimeout(() => {
        setShowStarter(false)
      }, 450)
    }
  }, [logoDone]);

  const handleClick = () => {
    setTimeout(() => {
      setShowPage(true);
      setTimeout(() => {
        navigate("/home");
      }, 1000);
    }, 0);
  };

  const StarterPage = () => {
    return (
      <div className="App" style={{ overflow: "hidden" }}>
        <div className={`page ${showPage ? "showPage" : ""}`}></div>
        <div className={`typing-text `}>
          <div
            className={`typing-text ${showPage ? "topTheText" : ""}`} id="hello"
            style={{
              display: "flex",
              width: "100vw",
              margin: "3rem 0",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "4rem",
              color: "rgb(181, 190, 203)"
            }}>
            <TextScramble texts={textsToType} letterSpeed={10}
              nextLetterSpeed={200} />
          </div>
        </div>

        <div className={`${showStarter ? "showStarter" : ""}`}>


          <div
            className="greetings"
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingTop: "3rem",
              width: "100vw",
            }}
          >
            <div className="text" style={{ color: "white", paddingLeft: "2rem" }}>
              <h1
                style={{
                  fontSize: "3.5rem",
                  letterSpacing: "0.2rem",
                  margin: "0",
                  marginTop: "2rem",
                }}
              >
                Hey there! 👋 <br />{" "}
                <span
                  style={{
                    fontSize: "2.5rem",
                    margin: "0",
                    color: "rgb(181, 190, 203)",
                    fontWeight: "normal",
                  }}
                >
                  I'm Ankit Biswas
                </span>
              </h1>
              <p
                style={{ fontSize: "1.1rem", margin: "0", fontWeight: "lighter" }}
              >
                {" "}
                An 18-year-old, Who like build stuffs with a passion for
                technology and a love for coding. Currently pursuing my B.Tech in
                Computer Science at CV Raman Global University, Bhubaneswar, I
                find joy in exploring the vast world of programming.
              </p>
              <div className="" style={{ display: "flex", gap: "1rem" }}>
                <button
                  className="exploreMore"
                  style={{
                    padding: "1rem",
                    margin: "1rem 0",
                    backgroundColor: "transparent",
                    fontSize: "1rem",
                    cursor: "pointer",
                    border: "1px solid #d1d1d1",
                    color: "white",
                  }}
                  onClick={handleClick}
                >
                  Know me better
                </button>

                <button
                  className="doBuisness"
                  style={{
                    padding: "1rem",
                    margin: "1rem 0",
                    backgroundColor: "transparent",
                    fontSize: "1rem",
                    cursor: "pointer",
                    border: "1px solid #d1d1d1",
                    color: "white",
                  }}
                  onClick={handleClick}
                >
                  Start Buisness
                </button>
              </div>

            </div>

            <div className="imageContainer">
              <div className="image" style={{ position: "relative" }}>
                <img
                  src={back1}
                  alt=""
                  style={{ height: "38.5rem", margin: "0", padding: "0" }}
                />
                <div className="">
                  <a
                    href="https://github.com/ankit723?tab=repositories"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="enlarge1"
                      src={github}
                      alt=""
                      style={{
                        height: "5.3rem",
                        width: "10.7rem",
                        position: "absolute",
                        top: "4.8rem",
                        right: "13.8rem",
                        margin: "0",
                        padding: "0",
                        transition: "0.5s",
                        zIndex: "0",
                      }}
                      href="google.com"
                    />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/ankit-biswas-2ba1a51b5/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="enlarge"
                      src={linkedin}
                      alt=""
                      style={{
                        height: "5.5rem",
                        width: "11.8rem",
                        position: "absolute",
                        top: "7rem",
                        right: "23rem",
                        transform:
                          "rotateZ(-28.5deg) rotateY(43deg) rotateX(-40deg)",
                        transition: "0.5s",
                      }}
                      href="google.com"
                    />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/ankit-biswas-2ba1a51b5/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="enlarge2"
                      src={linkedin}
                      alt=""
                      style={{
                        height: "5.5rem",
                        width: "11.8rem",
                        position: "absolute",
                        top: "7rem",
                        right: "23rem",
                        transform:
                          "rotateZ(-28.5deg) rotateY(43deg) rotateX(-40deg)",
                        transition: "0.5s",
                        zIndex: "0",
                      }}
                      href="google.com"
                    />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/ankit-biswas-2ba1a51b5/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="enlarge"
                      src={leetcode}
                      alt=""
                      style={{
                        height: "6.9rem",
                        width: "10.5rem",
                        position: "absolute",
                        top: "6.3rem",
                        right: "4rem",
                        transform:
                          "rotateZ(27.5deg) rotateY(-29deg) rotateX(-47deg)",
                        transition: "0.5s",
                      }}
                      href="google.com"
                    />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/ankit-biswas-2ba1a51b5/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="enlarge3"
                      src={leetcode}
                      alt=""
                      style={{
                        height: "6.9rem",
                        width: "10.5rem",
                        position: "absolute",
                        top: "6.3rem",
                        right: "4rem",
                        transform:
                          "rotateZ(27.5deg) rotateY(-29deg) rotateX(-47deg)",
                        transition: "0.5s",
                        zIndex: "0",
                      }}
                      href="google.com"
                    />
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return <>{logoDone ? <StarterPage /> : <LogoPage setDone={setLogoDone} />}</>;
};

export default Starter;
