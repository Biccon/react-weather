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
    console.log("처음 마운트 됐을 때 날씨 구하기", this.state);
    this.getForecast();
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.city.id !== nextProps.city.id) {
      console.log("도시 다른거 선택할 때 날씨 구하기", nextProps);
      this.getForecast();
    }
  }

  getForecast = () => {
    const id = this.state.city.id;
    this.setState({
      loading: true
    });
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?id=${id}&appid=27a2181466830267d7ac26415db7e609`
      )
      .then(response => {
        const data = response.data;
        console.log(data);
        this.setState({
          loading: false
        });

        this.setState({
          weather: data.weather
        });
      })
      .catch(error => {
        console.log("error", error);
        this.setState({
          loading: false
        });
      });
  };

  constructor(props) {
    super(props);
    this.state = {
      city: props.city
    };
  }

  render() {
    const { city } = this.props;
    return (
      <div className="weather-current">
        <li>날씨: {this.state.weather.main}</li>
        <li>description: {this.state.weather.description}</li>
      </div>
    );
  }
}
export default WeatherCurrent;
