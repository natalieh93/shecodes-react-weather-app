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
          This project was coded by Natalie Hood and is open-sourced on Github.
        </span>
      </footer>
    </div>
  );
}
