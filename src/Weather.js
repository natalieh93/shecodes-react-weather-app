import React from "react";
import "./Weather.css"

export default function Weather() {
  return (
    <div>
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              className="form-control search-input"
              placeholder="Search for a city ..."
              autocomplete="off"
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
