import React, { Component } from "react";
import WeatherSetting from "./WeatherSetting";
import WeatherCurrent from "./WeatherCurrent";
import WeatherForecast from "./WeatherForecast";
import "./WeatherWrapper.scss";

class WeatherWrapper extends Component {
  state = {
    city: "seoul, kr"
  };

  render() {
    return (
      <div className="weather-wrapper">
        <WeatherSetting state={this.state} />
        <WeatherCurrent city={this.state.city} />
        <WeatherForecast city={this.state.city} />
      </div>
    );
  }
}

export default WeatherWrapper;
