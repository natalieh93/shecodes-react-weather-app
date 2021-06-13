import React from "react";
import logo from "./logo.svg";
import Weather from "./Weather.js";
import "./App.css";

export default function WeatherApp() {
  return (
    <div className="WeatherApp">
      <div className="WeatherApp-container">
        <div className="WeatherApp-content">
          <Weather defaultCity="Vienna"/>
        </div>
      </div>
      <footer>
        <img src={logo} className="React-logo" alt="logo" />
        <span>
          This project was coded by <a href="https://www.linkedin.com/in/natalie-hood-4b088a10b/" target="_blank" rel="noopener noreferrer" className="linkedin-link"><strong> Natalie Hood</strong>
          </a> and is <a href="https://github.com/natalieh93/shecodes-react-weather-app" target="_blank" rel="noopener noreferrer" className="github-link"><strong>open-sourced</strong></a> on Github.
        </span>
      </footer>
    </div>
  );
}
