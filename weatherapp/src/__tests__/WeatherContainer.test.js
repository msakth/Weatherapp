import React from "react";
import expect from "expect";
import { mount, shallow } from "enzyme";
import Config from "../config";

import { WeatherContainer } from "../app/components/Home/WeatherContainer";

function setup() {
  const props = {
    weatherData: [
      {
        dt_txt: "2017-02-12",
        main: { temp: 273, pressure: 100, temp_max: 302, temp_min: 182 },
        wind: { speed: 1041 },
        weather: [{ main: "cloud", description: "dark clouds" }],
      },
    ],
    loadWeatherForeCasts: () => {},
  };

  return mount(<WeatherContainer {...props} />);
}

describe("Testing Weather container Component", () => {
  it("should have weatherData, loadWeatherForeCasts props", () => {
    const wrapper = setup();
    expect(wrapper.props().weatherData).toBeDefined;
    expect(wrapper.props().loadWeatherForeCasts).toBeDefined;
  });

  it("weatherData props array should exactly have one set of weather data", () => {
    const wrapper = setup();
    expect(wrapper.props().weatherData.length).toBe(1);
  });

  it("sourceUrl should change based on env", () => {
    const url = Config.sourceUrl;
    const env = process.env.NODE_ENV;

    if (env === "development") {
      expect(url).toEqual(
        "http://api.openweathermap.org/data/2.5/forecast?id=2643743&appid=6f07a554e86becaa432f523c7261fae0&units=imperial"
      );
    } else {
      expect(url).toEqual(
        "http://api.openweathermap.org/data/2.5/forecast?id=2643743&appid=6f07a554e86becaa432f523c7261fae0&units=imperial"
      );
    }
  });

  //it('should have child WeatherList component',() => {
  // const wrapper = setup();
  //expect(wrapper.find('WeatherList').length).toBe(1);
  //});
});
