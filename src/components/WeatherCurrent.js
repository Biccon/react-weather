import React, { Component } from "react";
import "./WeatherCurrent.scss";

class WeatherCurrent extends Component {
  render() {
    const { city } = this.props;
    return <div className="weather-current">Current Weather of {city} </div>;
  }
}
export default WeatherCurrent;
