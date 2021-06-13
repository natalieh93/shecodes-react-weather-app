import React, {useState} from "react";
import axios from "axios";

import "./Weather.css";
import WeatherInfo from "./WeatherInfo.js";

export default function Weather(props) {

let [weatherData, setWeatherData] = useState({ ready: false });
let [city, setCity] = useState(props.defaultCity);


function handleResponse(response) {

setWeatherData({
    ready: true,
    city: response.data.name,
    country: response.data.sys.country,
    description: response.data.weather[0].description,
    humidity: response.data.main.humidity,
    icon: response.data.weather[0].icon,
    pressure: response.data.main.pressure,

    temperature: response.data.main.temp,
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

function search() {
    let apiKey = "1fa9ff4126d95b8db54f3897a208e91c";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready)
{ return (
    <div>
      <div>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              className="form-control search-input"
              placeholder="Search for a city ..."
              autocomplete="off"
            onChange={updateCity}
            />
          </div>
          <div className="col-3 p-0">
            <input
              type="submit"
              className="btn btn-light"
              id="submit-btn"
              value="Search"
            />
          </div>
        </div>
      </form>
    </div>
      <WeatherInfo data={weatherData} />
    </div>
  );
} else {
    search();
    return "Loading ...";
  }
}
