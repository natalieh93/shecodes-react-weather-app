import React from "react";

export default function FormattedTime(props) {
  let localTime = new Date(props.time);
  let localTimeOffset = localTime.getTimezoneOffset() * 60;
  localTime.setSeconds(
    localTime.getSeconds() + localTimeOffset + props.timezone
  );

  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let localDay = days[localTime.getDay()];

  let date = localTime.getDate();

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let month = months[localTime.getMonth()];



  let localHours = localTime.getHours();
  if (localHours < 10) {
    localHours = `0${localHours}`;
  }

  let localMinutes = localTime.getMinutes();
  if (localMinutes < 10) {
    localMinutes = `0${localMinutes}`;
  }

  return (
    <div className="FormattedTime">
      Local time: {localDay}, {date}. {month}, {localHours}:
      {localMinutes}
    </div>
  );
}
