import React, { Component } from "react";
import "./Loading.scss";

class Loading extends Component {
  render() {
    const { loading } = this.props;
    return (
      <div className={["loading", loading ? "" : "hidden"].join(" ")}>
        <div className="spinner">
          <div className="double-bounce1" />
          <div className="double-bounce2" />
        </div>
      </div>
    );
  }
}

export default Loading;
