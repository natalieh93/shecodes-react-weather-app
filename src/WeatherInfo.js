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
        <WeatherIcon
          code={props.data.icon}
          size={53}
          alt={props.data.description}
        />
        <span className="current-temperature">
          {""}
          {Math.round(props.data.temperature)}
        </span>
        <span className="unit">°C</span>
      </div>
      <div className="current-weather-description">
        {props.data.description}
      </div>
      <div className="row current-weather-details">
        <div className="col-4">
          <p>
            <strong>Humidity</strong> <br />
            {Math.round(props.data.humidity)}%
          </p>
        </div>
        <div className="col-4">
          <p>
            <strong>Wind</strong> <br /> {Math.round(props.data.wind)} mph
          </p>
        </div>
        <div className="col-4">
          <p>
            <strong>Pressure</strong>
            <br /> {Math.round(props.data.pressure)} hPa
          </p>
        </div>
      </div>
    </div>
  );
}
