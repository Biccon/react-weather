import React, { Component } from "react";
import "./WeatherSetting.scss";

class WeatherSetting extends Component {
  componentDidMount() { 
;  }
  render() {
    const { state } = this.props;
    return (
      <div>
        Setting weather {state.city}
        <button>도시</button>
      </div>
    );
  }
}
export default WeatherSetting;
