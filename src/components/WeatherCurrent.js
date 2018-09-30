import React, { Component, Fragment } from "react";
import "./WeatherCurrent.scss";
import axios from "axios";
import Loading from "./Loading";
import WeatherIcon from "./WeatherIcon";
import Moment from "react-moment";

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
  round = (floatNumber, number) => {
    return Math.round(floatNumber * 10 ** number) / 10 ** number;
  };
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
    this.getCurrent(this.props.city.id);
  };

  render() {
    const { loading, weather } = this.state;

    const weatherView = () => {
      if (weather != null) {
        return (
          <Fragment>
            <div className="weather-view">
              <div className="weather-icon">
                <div className="weather">
                  <WeatherIcon icon={weather.weather[0].icon} />
                  <span>{weather.weather[0].main}</span>
                </div>
                <div className="temp">
                  <span className="now">
                    {weather.temp.temp}
                    <i className="wi wi-celsius" />
                  </span>
                  <span className="low">
                    {weather.temp.temp_min}
                    <i className="wi wi-degrees" />
                  </span>
                  <span className="high">
                    {weather.temp.temp_max}
                    <i className="wi wi-degrees" />
                  </span>
                </div>
              </div>
              <div className="weather-wind">
                <div className="wind-speed">
                  <i className="wi wi-barometer" />
                  <span>{weather.wind.speed} ㎧</span>
                </div>
                <div className="wind-direction">
                  <i
                    className="wi wi-wind-direction"
                    style={{ transform: `rotate(${weather.wind.deg}deg)` }}
                  />
                  <span>
                    {weather.wind.deg}
                    <i className="wi wi-degrees" />
                  </span>
                </div>
                <div className="sun-sunrise">
                  <i className="wi wi-sunrise" />
                  <span className="time">
                    <span className="fromNow">
                      <Moment fromNow>{weather.sun.sunrise * 1000}</Moment>
                    </span>
                    <span className="format">
                      <Moment format="HH:mm:ss">
                        {weather.sun.sunrise * 1000}
                      </Moment>
                    </span>
                  </span>
                </div>
                <div className="sun-sunset">
                  <i className="wi wi-sunset" />
                  <span className="time">
                    <span className="fromNow">
                      <Moment fromNow>{weather.sun.sunset * 1000}</Moment>
                    </span>
                    <span className="format">
                      <Moment format="HH:mm:ss">
                        {weather.sun.sunset * 1000}
                      </Moment>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </Fragment>
        );
      } else {
        return (
          <div className="weather-view">
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
