import React, { useRef, useLayoutEffect, useState } from "react";
import SliderContainer from "../components/SliderContainer";
import "./pages.css";
import BigProfiles from "../components/BigProfiles";
import Dropdown from "../components/Dropdown.js";

const OurTeam = () => {
  const div = useRef();
  const indiv = useRef();
  const [width, setWidth] = useState();
  useLayoutEffect(() => {
    setWidth(div.current.getBoundingClientRect().width);
  }, []);

  return (
    <>
      <div className="our-team-background"></div>
      <div
        id="ourteam-scroll"
        style={{
          flexDirection: "column",
          overflowY: "scroll",
          marginTop: "12vh",
        }}
      >
        <div
          style={{ width: "100%", marginBottom: "auto", overflowX: "hidden" }}
        >
          <SliderContainer
            slides={BigProfiles}
            refA={div}
            refB={indiv}
            autoPlay={3.5}
            width={width}
            indiv={indiv}
          />
        </div>
        <div
          ref={div}
          style={{
            marginTop: "40px",
            marginBottom: "60px",
            alignItems: "center",
            display: "flex",
            justifyContent: "space-bewteen",
            flexDirection: "column",
          }}
        >
          <Dropdown
            team="Directors & Leadership"
            shortTeam="Directors"
            teamIndex="Directors"
            refer={indiv}
          />
          <Dropdown team="Development Team" shortTeam="Dev" teamIndex="Dev" />
          <Dropdown
            team="Design Team"
            shortTeam="Design"
            teamIndex="Design"
          />
        </div>
      </div>
    </>
  );
};

export default OurTeam;
