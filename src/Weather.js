import React, { useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import WeatherForecastPreview from "./WeatherForecastPreview.js";
import WeatherInfo from "./WeatherInfo.js";
import "./Weather.css";
import "./Search.css";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });
  let [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      coordinates: response.data.coord,
      country: response.data.sys.country,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      feels_like:  response.data.main.feels_like,
      icon: response.data.weather[0].icon,
      temperature: response.data.main.temp,
      timezone: response.data.timezone,
      wind: response.data.wind.speed,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

    function handleClick(event) {
    handleSubmit();
  }

  function search() {
    let apiKey = "1fa9ff4126d95b8db54f3897a208e91c";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="WeatherApp-content">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                className="form-control search-input"
                placeholder="Search for a city here"
                autocomplete="off"
                onChange={updateCity}
              />
            </div>
            <div className="col-3 p-0">
              <button
                class="btn btn-sm btn-primary-outline search-city-button"
                id="search-city-button"
                type="button"
                onClick={handleClick}
              >
                <i class="fas fa-search"></i>
              </button>
            </div>

         
         
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecastPreview coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return (
      <Loader
        type="ThreeDots"
        color="#61d9fb"
        height={80}
        width={80}
        timeout={3000}
      />
    );
  }
}
