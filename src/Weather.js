import React from "react";

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
      <h1>Vienna, AT</h1>
      <h3>Local time: Sun 13. Jun, 10:02</h3>
      <h2>19°C</h2>
      <h4>Clear Sky</h4>
      <div className="row">
        <div className="col"> Humidity: 64% </div>
        <div className="col"> Wind: 1 mph </div>
        <div className="col"> Pressure: 1028 hpA </div>
      </div>
    </div>
  );
}
