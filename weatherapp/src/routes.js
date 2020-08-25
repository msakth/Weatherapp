// 3rd Party References
import React from "react";
import { Route, IndexRoute } from "react-router";

//Internal Component References
import App from "./app/components/App";
import WeatherContainer from "./app/components/Home/WeatherContainer";
import DetailPage from "./app/components/Detail/DetailPage";

export default (
  <Route path="/" component={App}>
    <IndexRoute components={WeatherContainer} />
    <Route path="detail" components={DetailPage} />
  </Route>
);
