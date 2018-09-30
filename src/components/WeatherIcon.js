import React from "react";
const ico = {
  "01": {
    netural: false,
    icon: "sunny|clear"
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

const iconParse = icon => {
  let temp = icon.substr(2, 1);
  let dayOrNight = temp === "d" ? "day" : "night";
  const i = { ...ico[icon.substr(0, 2)] };
  if (i.icon.indexOf("|") !== -1) {
    const iconDayOrNight = i.icon.split("|");
    i.icon = temp === "d" ? iconDayOrNight[0] : iconDayOrNight[1];
  }
  return i.netural ? `wi-${i.icon}` : `wi-${dayOrNight}-${i.icon}`;
};

const WeatherIcon = props => {
  const { icon } = props;

  return <i className={["wi", iconParse(icon)].join(" ")} />;
};

export default WeatherIcon;
