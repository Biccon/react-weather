import React, { Component } from "react";
import "./WeatherSetting.scss";

class WeatherSetting extends Component {
  componentDidMount() {}
  style = {
    city: {
      width: "100px",
      height: "30px"
    }
  };
  render() {
    const { cities, currentIndex, onCityChange } = this.props;
    const cityChange = e => {
      const changedIndex = e.target.selectedIndex;
      onCityChange(changedIndex);
    };
    return (
      <div className="weather-setting">
        <div class="dropdown">
          <div class="select">
            <span>Select Gender</span>
            <i class="fa fa-chevron-left" />
          </div>
          <input type="hidden" name="gender" />
          <ul class="dropdown-menu">
            <li id="male">Male</li>
            <li id="female">Female</li>
          </ul>
        </div>
        <select id="city" onChange={cityChange} value={currentIndex}>
          {cities.map((city, i) => (
            <option value={i} key={i}>
              {city.name}
            </option>
          ))}
        </select>
      </div>
    );
  }
}
export default WeatherSetting;
