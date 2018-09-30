import React, { Component } from "react";
import "./WeatherForecast.scss"; 
import Loading from "./Loading";

class WeatherForecast extends Component {
  state = {
    loading: false
  };
  /*

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
      .then(e => {
        console.log(e);
        this.setState({
          loading: false
        })
      })
      .catch(e => {
        this.setState({
          loading: false
        })
      });
  };

  constructor(props) {
    super(props);
    console.log("컨스트럭터 작동, props is : ", props);
    this.state = {
      city: props.city
    };
  }
  */
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
