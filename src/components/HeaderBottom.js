import React, { Component } from "react";
import "../styles/components/headerBottom.scss";

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
            <ul className="path">
              <li>
                <p className="mainText">Men </p>
                <p>/</p>
              </li>
              <li>
                <p className="mainText">Clothing</p>
                <p>/</p>
              </li>
              <li>
                <p className="mainText">Tops</p>
                <p>/</p>
              </li>
              <li>
                <p className="mainText">Adidas</p>
                <p>/</p>
              </li>
              <li>
                <p className="mainText">Adidas Black T-shirt</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderBottom;
