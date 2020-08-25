import React from "react";

const WeatherHeader = (headerDetails) => {
  const { currentDate, max, min, cloud } = headerDetails;
  return (
    <span className="weatherListRowHeader">
      <span className="panel-title">{currentDate}</span>

      <span className="btn btn-sm btn-primary pull-right">
        <span className="glyphicon glyphicon-arrow-up">
          <b>Max {max}</b>
        </span>
      </span>
      <span className="btn btn-sm btn-primary pull-right">
        <span className="glyphicon glyphicon-arrow-down">
          <b>Min {min}</b>
        </span>
      </span>

      <span className="btn btn-sm btn-primary pull-right">
        <span className="glyphicon glyphicon-cloud">
          <span>
            <b>{cloud}</b>
          </span>
        </span>
      </span>
    </span>
  );
};

export default WeatherHeader;
