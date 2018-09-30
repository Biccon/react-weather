import React, { Component } from "react";
import "./WeatherIcon.scss";

ico = {
  "01": {
    netural: false,
    icon: "sunny"
  },
  "02": {
    netural: false,
    icon: "cloudy"
  },
  "03": {
    netural: true,
    icon: "cloud"
  },
  "04": {
    netural: false,
    icon: "hail"
  },
  "09": {
    netural: false,
    icon: "rain"
  },
  "10": {
    netural: false,
    icon: "rain-mix"
  },
  "11": {
    netural: true,
    icon: "thunderstorm"
  },
  "13": {
    netural: false,
    icon: "snow"
  },
  "50": {
    netural: false,
    icon: "fog"
  }
};

iconParse = icon => {
  let dayOrNight = icon.substr(2, 1) === "d" ? "day" : "night";
  const i = this.ico[icon.substr(0, 2)];
  let icoName = i.netural ? `wi-${i.icon}` : `wi-${dayOrNight}-${i.icon}`;
  return icoName;
};

class WeatherIcon extends Component {
  render() {
    const { icon } = this.props;
    return <div />;
  }
}

export default WeatherIcon;
