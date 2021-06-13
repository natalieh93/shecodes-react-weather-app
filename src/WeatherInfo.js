import React from "react";
import WeatherIcon from "./WeatherIcon.js";
import "./Weather.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="current-location">{props.data.city}, {props.data.country}</div>
      <div className="current-date">Local time: Sun 13. Jun, 10:02</div>
      <div className="temperature-container">
          <WeatherIcon code={props.data.icon} size={53}  alt={props.data.description} />
          <span className="current-temperature">{""}
            {Math.round(props.data.temperature)}</span><span className="unit">°C</span>
          </div>
   
      <div className="current-weather-description">{props.data.description}</div>
      <div className="row current-weather-details">
        <div className="col-4">
            <p>

          Humidity <br />
         {Math.round(props.data.humidity)}%</p>
        </div>
        <div className="col-4">
               <p>
  
          Wind <br /> {Math.round(props.data.wind)} mph</p>
        </div>
        <div className="col-4">

          <p>
          Pressure
          <br /> {Math.round(props.data.pressure)} hPa</p>
        </div>
      </div>
    </div>
  );
}
