import React from "react";
import { connect } from "react-redux";

import "../../../Styles/styles.css";
import * as weatherActions from "../../Actions/WeatherActions";
import WeatherList from "./WeatherList";

import Config from "../../../config";

export class WeatherContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadWeatherForeCasts(Config.sourceUrl);
  }

  getWeatherList(weatherData) {
    if (weatherData.length > 0) {
      return (
        <div>
          <WeatherList weatherData={weatherData} />
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  render() {
    return this.getWeatherList(this.props.weatherData);
  }
}

function mapStateToProps(state) {
  return {
    weatherData: state.WeatherReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadWeatherForeCasts: (url) =>
      dispatch(weatherActions.loadWeatherForeCasts(url)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherContainer);
