import React, { Component } from "react";
import "./WeatherForecast.scss";

class WeatherForecast extends Component {
  componentDidMount() {
    //axios
  }
  render() {
    const { city } = this.props;
    return (
      <div className="weather-forecast">
        Forecast Weather this city is {city.name}, this id is {city.id}
      </div>
    );
  }
}
export default WeatherForecast;
