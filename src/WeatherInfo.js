import React from "react";
import FormattedTime from "./FormattedTime.js";
import WeatherIcon from "./WeatherIcon.js";
import "./Weather.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="current-location">
        {props.data.city}, {props.data.country}
      </div>
      <div className="current-local-time">
        {" "}
        <FormattedTime
          time={props.data.date}
          timezone={props.data.timezone}
        />{" "}
      </div>
      <div className="current-icon-and-temperature">
        
        <div className="current-icon"><WeatherIcon
          code={props.data.icon}
          size={53}
          alt={props.data.description}
        />
        </div>
        <span className="current-temperature">
          {""}
          {Math.round(props.data.temperature)}
        </span>
        <span className="unit">°C</span>
      </div>
      <div className="current-weather-description">
        {props.data.description}
      </div>
      <div className=" current-weather-details">
        <ul>
          <li className="real-feel">
            <i className="fas fa-thermometer-three-quarters"></i>
            <strong> &nbsp; Real feel:</strong>{" "}
            {Math.round(props.data.feels_like)}°
          </li>

          <li className="humidity">
            <i className="fas fa-tint"></i>&nbsp;
            <strong>Humidity:</strong>{" "}
            {Math.round(props.data.humidity)}%
          </li>
          <li className="wind">
            <i className="fas fa-wind"></i> <strong>Wind:</strong>{" "}
            {Math.round(props.data.wind)} mph
          </li>
        </ul>
      </div>
    </div>
  );
}
