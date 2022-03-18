import React, { Component } from "react";
import HeaderMiddel from "./HeaderMiddel";
import HeaderTop from "./HeaderTop";
import HeaderBottom from "./HeaderBottom";

class Header extends Component {
  state = {};
  render() {
    return (
      <div className="header">
        <HeaderTop />
        <HeaderMiddel openMyCart={this.props.openMyCart} />
        <HeaderBottom />
      </div>
    );
  }
}

export default Header;
