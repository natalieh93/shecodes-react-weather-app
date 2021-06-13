import React from "react";

export default function FormattedTime(props) {
  let localTime = new Date(props.time);
  let localTimeOffset = localTime.getTimezoneOffset() * 60;
  localTime.setSeconds(
    localTime.getSeconds() + localTimeOffset + props.timezone
  );

  let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
  let localDay = days[localTime.getDay()];

  let date = localTime.getDate();

  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let month = months[localTime.getMonth()];

  let year = localTime.getFullYear();

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
      Local time: {localDay}, {date}. {month} {year} | {localHours}:
      {localMinutes}
    </div>
  );
}
