import React, { Component } from "react";
import "./WeatherForecast.scss";

class WeatherForecast extends Component {
  render() {
    const { city } = this.props;
    return <div className="weather-forecast">Forecast Weather this city is {city}</div>;
  }
}
export default WeatherForecast;
