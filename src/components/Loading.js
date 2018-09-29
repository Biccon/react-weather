import React, { Component } from "react";
import "./Loading.scss";

class Loading extends Component {
  render() {
    const { loading } = this.props;
    return (
      <div className={["loading", loading ? "" : "hidden"].join(" ")}>
        Loading
      </div>
    );
  }
}

export default Loading;
