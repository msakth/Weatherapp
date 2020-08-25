import React from "react";
import expect from "expect";
import { mount, shallow } from "enzyme";
import styles from "../Styles/styles.css";

import WeatherListRow from "../app/components/Home/WeatherListRow";

function setup() {
  const props = {
    dates: [
      {
        dt_txt: "2017-02-12",
        main: { temp: 273, pressure: 100, temp_max: 302, temp_min: 182 },
        wind: { speed: 1041 },
        weather: [{ main: "cloud", description: "dark clouds" }],
      },
    ],
  };

  return shallow(<WeatherListRow {...props} />);
}

describe("Testing WeatherListRow component", () => {
  it("testig all div tag", () => {
    const wrapper = setup();
    expect(wrapper.find("div").length).toBe(5);
  });

  it("test weatherListRowHeader cssclass is present", () => {
    const weatherListRowHeaderDiv = (
      <div className={styles.weatherListRowHeader} />
    );
    const wrapper = shallow(weatherListRowHeaderDiv);
    wrapper.hasClass("weatherListRowHeader");
  });

  it("should have props for dates", () => {
    const wrapper = setup();
    expect(wrapper.props().dates).toBeDefined;
  });
});
