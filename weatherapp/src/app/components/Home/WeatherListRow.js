import React, { PropTypes } from "react";
import $ from "jquery";

import { DateConverter } from "../../../Utilities/DateConverter";
import WeatherHeader from "./WeatherHeader";
import WeatherBody from "./WeatherBody";

function farenhietToCelcius(fahrenheit) {
  const fTemp = fahrenheit;
  const fToCel = ((fTemp - 32) * 5) / 9;
  const roundedCelcius = Math.round(fToCel * 100) / 100;
  return roundedCelcius + "\xB0C";
}

function getHeader(dates) {
  const currentDate = DateConverter().toLongDateAnd24HrTimeDisplay(
    dates[0].dt_txt
  );
  const cloud = dates[0].weather[0].description;

  const maxTemps = dates.map((date) => {
    return date.main.temp_max;
  });

  const max = Math.max(...maxTemps);

  const minTemps = dates.map((date) => {
    return date.main.temp_min;
  });

  const min = Math.min(...minTemps);

  const maxInCelcius = farenhietToCelcius(max);
  const minInCencius = farenhietToCelcius(min);

  const headerDetails = {
    currentDate,
    max: maxInCelcius,
    min: minInCencius,
    cloud,
  };

  return <WeatherHeader {...headerDetails} />;
}

function getBody(dates) {
  return dates.map((dateProps, index) => {
    return <WeatherBody key={index} dateProps={dateProps} />;
  });
}

const WeatherListRow = ({ dates }) => {
  const header = getHeader(dates);

  const body = getBody(dates);

  return (
    <div id="weather">
      <div className="panel panel-default">
        <div className="panel-heading">{header}</div>
        <div className="panel-body">
          <div className="weatherList">{body}</div>
        </div>
      </div>
    </div>
  );
};

WeatherListRow.propTypes = {
  dates: PropTypes.array.isRequired,
};

export default WeatherListRow;
