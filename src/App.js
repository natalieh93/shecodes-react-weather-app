import React from "react";
import logo from "./logo.svg";
import swapbutton from "./swapbutton.png";
import Weather from "./Weather.js";
import "./App.css";

export default function WeatherApp() {
  return (
    <div className="WeatherApp">
      <div className="WeatherApp-container">
        <Weather defaultCity="Vienna" />
      </div>
      <footer>
        <img src={logo} className="React-logo" alt="logo" />
        <span>
          <a
            href="https://github.com/natalieh93/shecodes-react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            {" "}
            Open-source code{" "}
          </a>{" "}
          by {""}
          <a
            href="https://www.linkedin.com/in/natalie-hood-4b088a10b/"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-link"
          >
            Natalie Hood{" "}
          </a>
        </span>
        &nbsp; | &nbsp; &nbsp;
        <img src={swapbutton} className="Swap-button" alt="swap-button" />
        &nbsp; &nbsp;
        <span>
          <a
            href="https://kind-tesla-ebc058.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="dictionary-app-link"
          >
            <strong> React Dictionary App</strong>
          </a>
        </span>
      </footer>
    </div>
  );
}
