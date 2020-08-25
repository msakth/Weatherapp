import { ActionTypes } from "../Constants/ActionTypes";

export default function weatherReducer(state = [], action) {
  switch (action.type) {
    case ActionTypes.weatherTypes.RECEIVE_WEATHER_FORECAST:
      return action.weatherData;
    default:
      return state;
  }
}
