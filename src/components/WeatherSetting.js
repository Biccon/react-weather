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
    const { state } = this.props;
    return (
      <div className="weather-setting">
        Setting weather {state.city}
        <div className="setting-city">
          <select id="city" style={this.style.city}>
            <option>서울</option>
            <option>광주</option>
            <option>부산</option>
          </select>
          <button>변경</button>
        </div>
      </div>
    );
  }
}
export default WeatherSetting;
