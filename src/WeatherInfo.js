import React from "react";
import FormattedTime from "./FormattedTime.js";
import WeatherIcon from "./WeatherIcon.js";
import "./Weather.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
       <div className="current-local-time">
        {" "}
        <FormattedTime
          time={props.data.date}
          timezone={props.data.timezone}
        />{" "}
      </div>
      <div className="current-location">
        {props.data.city}, {props.data.country}
      </div>
     

      <div className="row">
        <div className="col-3 current-icon">
          <WeatherIcon
            code={props.data.icon}
            size={80}
            alt={props.data.description}
          />
        </div>
        <div className="col-6 text-center">
          <h5 className="current-weather-description">
            {props.data.description}
            </h5>
       
          <h6 className="current-temperature">
            {""}
            {Math.round(props.data.temperature)}
            <span className="unit">°C</span>
          </h6>
          <h6 className="max-and-min-temperatures">
            <i className="fas fa-arrow-up"></i> &nbsp;
           High:
            <span className="current-max-temprature">
            <strong>  {" "}
              {Math.round(props.data.temp_max)}°</strong>
            </span>
            <strong>&nbsp;&nbsp;|</strong>&nbsp;&nbsp;
            <i className="fas fa-arrow-down"></i>&nbsp;
            Low:{" "}
            <span className="current-min-temperature">
             <strong> {Math.round(props.data.temp_min)}°</strong>
            </span>
          </h6>
        </div>
            </div>


      <div className="col-4 current-weather-details">
        <ul>
          <li className="real-feel">
            <i className="fas fa-thermometer-three-quarters"></i>
            <strong> &nbsp; Real feel:</strong>{" "}
            {Math.round(props.data.feels_like)}°
          </li>
          <li className="humidity">
            <i className="fas fa-tint"></i>&nbsp;
            <strong>Humidity:</strong> {Math.round(props.data.humidity)}%
          </li>
          <li className="wind">
            <i className="fas fa-wind"></i> <strong>Wind:</strong>{" "}
            {Math.round(props.data.wind)} km/h
          </li>
        </ul>
      </div>
    </div>
  );
}
