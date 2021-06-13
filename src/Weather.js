import React from "react";
import "./Weather.css";
import Search from "./Search.js";
import WeatherInfo from "./WeatherInfo.js";

export default function Weather() {
  return (
    <div>
      <Search />
      <WeatherInfo />
    </div>
  );
}
