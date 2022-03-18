import React, { Component } from "react";

class HeaderBottom extends Component {
  state = {};
  render() {
    return (
      <div className="headerBottomContainer">
        <div className="navbarContainer">
          <div className="categoryContainer">
            <ul className="categoryList">
              <li>Men</li>
              <li>Women</li>
              <li>Unisex</li>
              <li>Kids</li>
              <li>Best Sellers</li>
              <li>New Arrivals</li>
              <li>Offers</li>
            </ul>
          </div>
          <div className="pathContainer">
            <h3 className="path">
              Men / Clothing / Tops / Adidas / Adidas Black T-shirt
            </h3>
          </div>
          {/*style border-bottom: 1px solid gray */}
        </div>
      </div>
    );
  }
}

export default HeaderBottom;
