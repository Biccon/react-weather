import React, { Component } from "react";
import "./WeatherCurrent.scss";
import axios from "axios";
import Loading from "./Loading";

class WeatherCurrent extends Component {
  state = {
    loading: false,
    weather: {}
  };

  componentDidMount() {
    this.getCurrent(this.props.city.id);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.city.id !== nextProps.city.id) {
      // 달라졌을 때 실행
      this.getCurrent(nextProps.city.id);
    }
  }

  getCurrent = id => {
    console.log("getCurrentWeather_city id : ", id);
    this.setState(prevState => ({
      loading: true
    }));
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?id=${id}&appid=27a2181466830267d7ac26415db7e609`
      )
      .then(response => {
        const data = response.data;
        console.log(data);
        this.setState(prevState => ({
          loading: false,
          weather: data
        }));
      })
      .catch(error => {
        console.log("error", error);
        this.setState(() => ({
          loading: false
        }));
      });
  };

  refresh = () => {
    this.getCurrent(this.props.city.id);
  };
  render() {
    const { city } = this.props;
    return (
      <div className="weather-current">
        <Loading loading={this.state.loading} />
        <h2>
          Current city is {city.name}
          <i class="wi wi-celsius" />
          <button onClick={this.refresh}>Refresh</button>
        </h2>
      </div>
    );
  }
}
export default WeatherCurrent;
