import React, { useEffect, useState } from "react";
import Classes from "./home.module.css";
import img from "../background-image/arrowDown.png";
import ProjectItem from "./projectItem";
import TechStack from "./techStack.js";

const Home = () => {
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    if (navOpen) {
      document.getElementById("navBallLine1").style.transform =
        "rotateZ(45deg) translate(00000rem, 0.5rem)";
      document.getElementById("navBallLine2").style.transform =
        "translateX(5rem)";
      document.getElementById("navBallLine3").style.transform =
        "rotateZ(-45deg) translate(0.1rem, -0.6rem)";
      document.getElementById("navBallLine1").style.marginRight = "0";
      document.getElementById("navBallLine2").style.marginRight = "0";
      document.getElementById("navBallLine3").style.marginRight = "0";
      document.getElementById("mainNavBall").style.width = "230px";
      document.getElementById("mainNavBall").style.height = "230px";
    } else {
      document.getElementById("navBallLine1").style.transform =
        "rotateZ(0deg) translate(0rem, 0rem)";
      document.getElementById("navBallLine2").style.transform =
        "translateX(0rem)";
      document.getElementById("navBallLine3").style.transform =
        "rotateZ(0deg) translate(0rem, 0rem)";
      document.getElementById("navBallLine1").style.marginRight = "1rem";
      document.getElementById("navBallLine2").style.marginRight = "1rem";
      document.getElementById("navBallLine3").style.marginRight = "1rem";
      document.getElementById("mainNavBall").style.width = "0px";
      document.getElementById("mainNavBall").style.height = "0px";
    }
  }, [navOpen]);
  const handleNavOpen = () => {
    setNavOpen(!navOpen);
  };

  return (
    <>
      <div className={Classes.container}>
        <div className={Classes.mainNavBall} id="mainNavBall"></div>

        <div className={Classes.navBall} onClick={handleNavOpen}>
          <div className={Classes.navBallLine1} id="navBallLine1"></div>
          <div className={Classes.navBallLine2} id="navBallLine2"></div>
          <div className={Classes.navBallLine3} id="navBallLine3"></div>
        </div>

        <h1
          style={{
            margin: "0 2rem",
            color: "white",
            fontSize: "2rem",
            paddingTop: "4rem",
          }}
        >
          Tech Stacks
        </h1>
        <div className={`${Classes.techStacks} showcase`}>
          <div className="">
            <TechStack title={"React"} />
          </div>
        </div>

        <h1
          style={{
            margin: "0 2rem",
            color: "white",
            fontSize: "2rem",
            paddingTop: "6rem",
          }}
        >
          Projects
        </h1>
        <div className={Classes.projects}>
          <ProjectItem
            id={1}
            heading={"Project"}
            description={
              "loremfnjv fgvjrkgvr gvbrgjvb tiurbv irbvir vrb hvbrtbrv btbvi rtvirtvbrlib vbrgvbrivbr gviubrukbvkr"
            }
          />
          <ProjectItem
            id={2}
            heading={"Project"}
            description={
              "loremfnjv fgvjrkgvr gvbrgjvb tiurbv irbvir vrb hvbrtbrv btbvi rtvirtvbrlib vbrgvbrivbr gviubrukbvkr"
            }
          />
          <ProjectItem
            id={3}
            heading={"Project"}
            description={
              "loremfnjv fgvjrkgvr gvbrgjvb tiurbv irbvir vrb hvbrtbrv btbvi rtvirtvbrlib vbrgvbrivbr gviubrukbvkr"
            }
          />
          <ProjectItem
            id={4}
            heading={"Project"}
            description={
              "loremfnjv fgvjrkgvr gvbrgjvb tiurbv irbvir vrb hvbrtbrv btbvi rtvirtvbrlib vbrgvbrivbr gviubrukbvkr"
            }
          />
          <ProjectItem
            id={5}
            heading={"Project"}
            description={
              "loremfnjv fgvjrkgvr gvbrgjvb tiurbv irbvir vrb hvbrtbrv btbvi rtvirtvbrlib vbrgvbrivbr gviubrukbvkr"
            }
          />
          <ProjectItem
            id={6}
            heading={"Project"}
            description={
              "loremfnjv fgvjrkgvr gvbrgjvb tiurbv irbvir vrb hvbrtbrv btbvi rtvirtvbrlib vbrgvbrivbr gviubrukbvkr"
            }
          />
        </div>
      </div>
    </>
  );
};

export default Home;
