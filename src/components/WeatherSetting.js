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
      alert('a');
      console.log(e);
      const changedIndex = e.target.value;
      console.log(changedIndex);
      onCityChange(changedIndex);
    };
    return (
      <div className="weather-setting">
        <DropdownSelect
          name="city"
          handleChange={cityChange}
          value={currentIndex}
          list={cities.map(city => city.name)}
        />
      </div>
    );
  }
}
export default WeatherSetting;
