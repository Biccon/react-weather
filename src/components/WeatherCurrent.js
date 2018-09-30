import React, { Component, Fragment } from "react";
import "./WeatherCurrent.scss";
import axios from "axios";
import Loading from "./Loading";

class WeatherCurrent extends Component {
  state = {
    loading: false,
    weather: null
  };

  componentDidMount() {
    this.getCurrent(this.props.city.id);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.city.id !== nextProps.city.id) {
      this.getCurrent(nextProps.city.id);
    }
  }

  getCurrent = id => {
    console.log("getCurrentWeather_city id : ", id);
    this.setState({
      loading: true
    });
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?id=${id}&appid=27a2181466830267d7ac26415db7e609&units=metric`
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
            temp: main.temp,
            temp_max: main.temp_max,
            temp_min: main.temp_min
          },
          clouds: clouds.all,
          wind: wind,
          weather: weather,
          sun: { sunrise: sys.sunrise, sunset: sys.sunset }
        };
        console.log(newData);
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
    this.getCurrent(this.props.city.id);
  };

  render() {
    const { city } = this.props;
    const { loading, weather } = this.state;

    const weatherView = () => {
      if (weather != null) {
        return <Fragment>
          <h2>{weather.name}</h2>
          <div className="weather-view">
            <b>{weather.temp.temp} <i className="wi wi-celsius"></i></b>
          </div>
          {JSON.stringify(weather)}
        </Fragment>;
      } else {
        return (
          <div>
            <i className="wi wi-na" />
          </div>
        );
      }
    };
    return (
      <div className="weather-current">
        <Loading loading={loading} />
        {weatherView()}
      </div>
    );
  }
}
export default WeatherCurrent;
