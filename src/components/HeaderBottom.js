import React, { Component } from "react";

class HeaderBottom extends Component {
  state = {};
  render() {
    return (
      <div className="headerBottomContainer">
        <div className="navbarContainer">
          <div className="categoryContainer">
            <ul className="categoryList">
              <li>
                <a href="#">Men</a>
              </li>
              <li>
                <a href="#">Women</a>
              </li>
              <li>
                <a href="#">Unisex</a>
              </li>
              <li>
                <a href="#">Kids</a>
              </li>
              <li>
                <a href="#">Best Sellers</a>
              </li>
              <li>
                <a href="#">New Arrivals</a>
              </li>
              <li>
                <a href="#">Offers</a>
              </li>
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
