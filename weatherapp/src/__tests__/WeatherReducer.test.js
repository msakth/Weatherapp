import React from "react";
import expect from "expect";

import WeatherReducer from "../app/Reducers/WeatherReducer";
import * as WeatherActions from "../app/Actions/WeatherActions";
import { ActionTypes } from "../app/Constants/ActionTypes";

describe("Weather Reducer testing", () => {
  it("reducer returning new state", () => {
    //Arrange
    const initialState = [
      {
        dt_txt: "2017-02-12",
      },
    ];
    const action = WeatherActions.loadWeatherForecastSuccess(initialState);

    //act
    const newState = WeatherReducer(initialState, action);

    //assert
    expect(newState).toEqual(initialState);
  });
});
