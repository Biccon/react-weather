import React, { Component } from "react";
import "./DropdownSelect.scss";

class DropdownSelect extends Component {
  state = {
    value: ""
  };
  dropdownClick = e => {
    const t = e.target;
    console.log(e);
    console.log(t);
    t.parentElement.setAttribute("tabindex", 1);
    t.parentElement.focus();
    t.parentElement.classList.toggle("active");
    t.parentElement.querySelector(".dropdown-menu").slidetoggle(300);
    e.stopPropagation();
  };
  render() {
    const { name, onChange, list } = this.props;
    return (
      <div class="dropdown">
        <div class="select" onClick={this.dropdownClick}>
          <span>{list[0]}</span>
          <i class="fa fa-chevron-left" />
        </div>
        <input
          type="hidden"
          name={name}
          value={this.state.value}
          onChange={onChange}
        />
        <ul class="dropdown-menu">
          {list.map((item, i) => (
            <li key={i} id={item}>
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
