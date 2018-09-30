import React, { Component } from "react";
import WeatherSetting from "./WeatherSetting";
import WeatherCurrent from "./WeatherCurrent";
import WeatherForecast from "./WeatherForecast";
import "./WeatherWrapper.scss";

class WeatherWrapper extends Component {
  cities = [
    { name: "서울", id: "1835848" },
    { name: "부산", id: "1838524" },
    { name: "대구", id: "1835329" },
    { name: "인천", id: "1843564" },
    { name: "광주", id: "1841811" },
    { name: "대전", id: "1835235" },
    { name: "울산", id: "1833747" },
    { name: "제주", id: "1846266" }
  ];

  state = {
    index: 0 // cities index
  };

  onCityChange = index => {
    this.setState({
      index
    });
  };

  render() {
    return (
      <div className="weather-wrapper">
        <WeatherSetting
          cities={this.cities}
          currentIndex={this.state.index}
          onCityChange={this.onCityChange}
        />
        <WeatherCurrent city={this.cities[this.state.index]} />
        <WeatherForecast city={this.cities[this.state.index]} />
      </div>
    );
  }
}

export default WeatherWrapper;
