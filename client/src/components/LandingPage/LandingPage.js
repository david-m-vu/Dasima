import "./LandingPage.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import izoneDiamond from "./images/izone-diamond2.png";
import githubIcon from "./images/github-mark-white.png";

const LandingPage = () => {
    const [korean, setKorean] = useState(false);
    const [text, setText] = useState("DASIMA")

    const switchTitleLanguage = () => {
        setKorean((prev) => !prev);
    }

    const getTitleCSSClass = () => {
        if (korean) {
            return "koreanText";
        } else {
            return "englishText";
        }
    }

    useEffect(() => {
        setTimeout(() => {
            if (korean) {
                setText("다시마");
            } else {
                setText("DASIMA");
            }
        }, 400);
    }, [korean])

    return (
        <div className="LandingPage">
            <div className="links">
                <a href="https://github.com/david-m-vu/Dasima" target="_blank" rel="noopener noreferrer">
                    <img id="github" src={githubIcon} alt="github"/>
                </a>
            </div>
            <div className="center">
                <div className="title" >
                    <h1 className={getTitleCSSClass()}>{text}</h1>
                    <img className="diamond" src={izoneDiamond} alt="Izone Diamond" onMouseEnter={switchTitleLanguage}></img>
                </div>
                <Link to="/main"><button className="startButton">START</button></Link>
            </div>
        </div>
    )
}

export default LandingPage;