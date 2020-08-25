// 3rd party references
import $ from "jquery";

import { ActionTypes } from "../Constants/ActionTypes";

export function loadWeatherForecastSuccess(weatherData) {
  return {
    type: ActionTypes.weatherTypes.RECEIVE_WEATHER_FORECAST,
    weatherData,
  };
}

export function loadWeatherForeCasts(url) {
  return function (dispatch) {
    return $.get(url, (result) => {
      const weatherData = result.list;
      dispatch(loadWeatherForecastSuccess(weatherData));
    });
  };
}
