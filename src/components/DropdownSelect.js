import React, { Component } from "react";
import "./DropdownSelect.scss";

class DropdownSelect extends Component {
  state = {
    text: "",
    value: "",
    display: false
  };

  dropdownClick = e => {
    const t = document.querySelector(".dropdown");
    t.setAttribute("tabindex", 1);
    t.focus();
    t.querySelector(".dropdown-menu").style.display =
      t.classList.toggle("active") == true ? "block" : "none";
    this.setState({
      display: !this.state.display
    });
  };
  focusOut = e => {
    const t = document.querySelector(".dropdown");
    t.classList.remove("active");
    t.querySelector(".dropdown-menu").style.display = "none";
    this.setState({
      display: false
    });
  };
  itemClick = e => {
    const t = document.querySelector(".dropdown");
    this.setState(
      {
        value: e.target.dataset.value,
        text: e.target.innerText
      },
      () => {
        t.querySelector("input");
      }
    );
  };
  changeValue = (text, value) => {
    this.setState({ text, value });
  };
  constructor(props) {
    super(props);
    console.log("props:", props.list[0]);
    this.setState({
      text: props.list[0],
      value: 0,
      display: false
    });
  }
  onChange = (e, func) => {
    func(e);
  };
  render() {
    const { text, value, display } = this.state;
    const { name, handleChange, list } = this.props;
    return (
      <div
        className="dropdown"
        onClick={this.dropdownClick}
        onBlur={this.focusOut}
      >
        <div className="select">
          <span>{text}</span>
          <i className="fa fa-chevron-left" />
        </div>
        <input
          type="text"
          style={{ display: "none" }}
          name={name}
          value={value}
          onChange={e => this.onChange(e, handleChange)}
        />
        <ul className={["dropdown-menu", !display && "hidden"].join(" ")}>
          {list.map((item, i) => (
            <li key={i} data-value={i} onClick={this.itemClick}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default DropdownSelect;
/*
$(".dropdown").click(function() {
  $(this)
    .attr("tabindex", 1)
    .focus();
  $(this).toggleClass("active");
  $(this)
    .find(".dropdown-menu")
    .slideToggle(300);
});
*/
