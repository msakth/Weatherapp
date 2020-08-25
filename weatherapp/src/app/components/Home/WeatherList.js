import React from "react";

import { DateConverter } from "../../../Utilities/DateConverter";
import WeatherListRow from "./WeatherListRow";

function repeater(today) {
  if (today.length > 0) {
    return <WeatherListRow dates={today} />;
  } else {
    return <div></div>;
  }
}

function selectRepeater(weatherData) {
  let rows = null;
  let convertedSateArray = new Array();
  weatherData.forEach((data) => {
    convertedSateArray.push(DateConverter().toStandardDateDisplay(data.dt_txt));
  });

  const uniqueDates = [...new Set(convertedSateArray)];

  if (uniqueDates.length > 0) {
    rows = uniqueDates.map((currentDate) => {
      const today = weatherData.filter(
        (dt) => DateConverter().toStandardDateDisplay(dt.dt_txt) == currentDate
      );

      const markup = repeater(today);

      return markup;
    });
  }

  return rows;
}

const WeatherList = ({ weatherData }) => {
  const repeater = selectRepeater(weatherData);

  return (
    <div id="weather">
      <div className="panel panel-default">
        <div className="panel-heading">
          <span>
            <h1 className="panel-title">London - 5 days Weather forecast</h1>
          </span>
        </div>
        <div className="panel-body">
          <div className="weatherList">
            {repeater.map((repeat, index) => {
              return <div key={index}>{repeat}</div>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherList;
