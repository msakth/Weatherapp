import React from "react";
import expect from "expect";

import * as WeatherActions from "../app/Actions/WeatherActions";
import { ActionTypes } from "../app/Constants/ActionTypes";

describe("Weather actions testing", () => {
  it("should create an action", () => {
    const weatherData = [
      {
        dt_txt: "2017-02-12",
        main: { temp: 273, pressure: 100, temp_max: 302, temp_min: 182 },
        wind: { speed: 1041 },
        weather: [{ main: "cloud", description: "dark clouds" }],
      },
    ];

    const expectedAction = {
      type: ActionTypes.weatherTypes.RECEIVE_WEATHER_FORECAST,
      weatherData: weatherData,
    };

    const action = WeatherActions.loadWeatherForecastSuccess(weatherData);

    expect(action).toEqual(expectedAction);
  });
});
