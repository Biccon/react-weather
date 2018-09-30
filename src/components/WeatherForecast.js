import React, { Component } from "react";
import "./WeatherForecast.scss";
import Loading from "./Loading";
import axios from "axios";

class WeatherForecast extends Component {
  state = {
    loading: false,
    weather: null
  };

  componentDidMount() {
    this.getForecast(this.props.city.id);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.city.id !== nextProps.city.id) {
      this.getForecast(nextProps.city.id);
    }
  }
  round = (floatNumber, number) => {
    return Math.round(floatNumber * 10 ** number) / 10 ** number;
  };
  getForecast = id => {
    console.log("getForecastWeather_city id : ", id);
    this.setState({
      loading: true
    });
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/forecast?id=${id}&appid=27a2181466830267d7ac26415db7e609&units=metric`
      )
      .then(response => {
        const data = response.data;
        const main = data["main"];
        const clouds = data["clouds"];
        const weather = data["weather"];
        const wind = data["wind"];
        const sys = data["sys"];

        const newData = {
          name: data["name"],
          humidity: main.humidity,
          pressure: main.pressure,
          temp: {
            temp: this.round(main.temp, 1),
            temp_max: this.round(main.temp_max, 1),
            temp_min: this.round(main.temp_min, 1)
          },
          clouds: clouds.all,
          wind: {
            speed: this.round(wind.speed, 1),
            deg: this.round(wind.deg, 0)
          },
          weather: weather,
          sun: { sunrise: sys.sunrise, sunset: sys.sunset }
        };
        this.setState({
          loading: false,
          weather: newData
        });
      })
      .catch(error => {
        console.log("error", error);
        this.setState({
          loading: false
        });
      });
  };

  refresh = () => {
    this.getForecast(this.props.city.id);
  };

  render() {
    const { city } = this.props;
    return (
      <div className="weather-forecast">
        <Loading loading={this.state.loading} />
        Forecast Weather this city is {city.name}, this id is {city.id}
      </div>
    );
  }
}
export default WeatherForecast;
