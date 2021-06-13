import React from "react";

export default function Search() {
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
    </div>
     ); }