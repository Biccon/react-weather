import React, { Component } from "react";
import "./WeatherCurrent.scss";

class WeatherCurrent extends Component {
  render() {
    const { city } = this.props;
    return <div>Current Weather of {city} </div>;
  }
}
export default WeatherCurrent;
