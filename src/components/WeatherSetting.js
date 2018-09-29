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
        <h2>City</h2>
        <div className="setting-city">
          <select
            id="city"
            style={this.style.city}
            onChange={cityChange}
            value={currentIndex}
          >
            {cities.map((city, i) => (
              <option value={i} key={i}>
                {city.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }
}
export default WeatherSetting;
