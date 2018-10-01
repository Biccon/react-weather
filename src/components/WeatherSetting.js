import React, { Component } from "react";
import "./WeatherSetting.scss";
import DropdownSelect from "./DropdownSelect";

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
        <DropdownSelect
          name="city"
          onChange={cityChange}
          value={currentIndex}
          list={cities.map(city => city.name)}
        >
          도시선택
        </DropdownSelect>
      </div>
    );
  }
}
export default WeatherSetting;
