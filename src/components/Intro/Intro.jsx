import React from 'react'
import { init } from "ityped"
import { useEffect, useRef } from "react";
import "./intro.scss";
import ritik from "../../Assets/ritik.png"
import down from "../../Assets/down.svg"
export default function Intro() {

    const textRef = useRef();

    useEffect(() => {
      init(textRef.current, {
        showCursor: true,
        backDelay: 1500,
        backSpeed:60,
        strings: ["Developer", "Designer"],
      });
    }, []);

    return (
        <div className="intro" id="intro">
            <div className="left">
        <div className="imgContainer">
          <img src={ritik} alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Ritik Rajpoot</h1>
          <h3>
            Web <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src={down} alt="" />
        </a>
      </div>
        </div>
    )
}
