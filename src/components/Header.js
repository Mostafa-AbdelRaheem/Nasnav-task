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
        <HeaderMiddel />
        <HeaderBottom />
        {/* <div className="pathContainer">
          <h3 className="path">
            Men/Clothing/Tops/Adidas/Adidas Black T-shirt
          </h3>
        </div> */}
        {/*style border-bottom: 1px solid gray */}
      </div>
    );
  }
}

export default Header;
