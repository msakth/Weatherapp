import React, { PropTypes } from "react";

import { DateConverter } from "../../../Utilities/DateConverter";

function farenhietToCelcius(fahrenheit) {
  const fTemp = fahrenheit;
  const fToCel = ((fTemp - 32) * 5) / 9;
  const roundedCelcius = Math.round(fToCel * 100) / 100;
  return roundedCelcius + "\xB0C";
}

function getWeatherBody(dateProps) {
  const currentTime = DateConverter().to24HrTimeDisplay(dateProps.dt_txt);
  const mainTemp = farenhietToCelcius(dateProps.main.temp);
  const windSpeed = dateProps.wind.speed + "m/s";
  const pressure = `${dateProps.main.pressure} hpa`;
  const mainWeather = dateProps.weather.main;

  return (
    <span>
      <div className="well well-sm custom-well-small">
        <h4>{currentTime}</h4>
        <b>
          <hr />
        </b>
        <div>
          <span className="btn btn-sm btn-primary">
            <span>
              <b> {mainTemp}</b>
            </span>
          </span>
        </div>
        <h6>{windSpeed}</h6>
        <h6>{pressure}</h6>
        <h6>{mainWeather}</h6>
      </div>
    </span>
  );
}

const WeatherBody = ({ dateProps }) => {
  const weatherBody = getWeatherBody(dateProps);

  return <span>{weatherBody}</span>;
};

export default WeatherBody;
