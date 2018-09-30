import React, { Component } from "react";
import "./WeatherForecast.scss";
import Loading from "./Loading";
import axios from "axios";
import Moment from "react-moment";
import WeatherIcon from "./WeatherIcon";

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
        let list = data["list"];

        list = list.filter(
          forecast => forecast["dt_txt"].substring(11) === "09:00:00"
        );

        list = list.map(forecast => {
          return {
            dt_txt: forecast.dt_txt,
            humidity: forecast.main.humidity,
            pressure: forecast.main.pressure,
            temp: {
              temp: this.round(forecast.main.temp, 1),
              temp_max: this.round(forecast.main.temp_max, 1),
              temp_min: this.round(forecast.main.temp_min, 1)
            },
            clouds: forecast.clouds.all,
            wind: {
              speed: this.round(forecast.wind.speed, 1),
              deg: this.round(forecast.wind.deg, 0)
            },
            weather: forecast.weather
          };
        });

        const newData = {
          name: data["city"].name,
          list
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
    this.getForecast(this.props.city.id);
  };

  render() {
    const { weather } = this.state;
    const weatherView = () => {
      if (weather != null) {
        return (
          <div className="forecast">
            {weather.list.map(forecast => (
              <div key={forecast.dt_txt} className="forecast-data">
                <h1 className="forecast-date">
                  <Moment format="MM. DD.">{forecast.dt_txt}</Moment>
                </h1>
                <div className="forecast-content">
                  <div className="forecast-weather">
                    <WeatherIcon icon={forecast.weather[0].icon} /> 
                    <div className="temp">
                      <span className="now">
                        {forecast.temp.temp}
                        <i className="wi wi-celsius" />
                      </span>
                      <span className="low">
                        {forecast.temp.temp_min}
                        <i className="wi wi-degrees" />
                      </span>
                      <span className="high">
                        {forecast.temp.temp_max}
                        <i className="wi wi-degrees" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      } else {
        return (
          <div className="forecast-na">
            <i className="wi wi-na" />
          </div>
        );
      }
    };
    return (
      <div className="weather-forecast">
        <Loading loading={this.state.loading} />
        {weatherView()}
      </div>
    );
  }
}
export default WeatherForecast;
