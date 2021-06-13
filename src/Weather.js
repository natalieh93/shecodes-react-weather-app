import React from "react";
import "./Weather.css"
import Search from "./Search.js";

export default function Weather() {
  return (
    <div>
    <Search/>
      <div className="current-location">Vienna, AT</div>
      <div className="current-date">Local time: Sun 13. Jun, 10:02</div>
      <div className="current-temperature">19°C</div>
      <div className="current-weather-description">Clear Sky</div>
      <div className="row current-weather-details">
        <div className="col-4"> Humidity: <br/>64% </div>
        <div className="col-4"> Wind: <br/>1 mph </div>
        <div className="col-4"> Pressure:<br/> 1028 hpA </div>
      </div>
    </div>
  );
}
