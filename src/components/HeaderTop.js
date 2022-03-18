import React, { Component } from "react";

class HeaderTop extends Component {
  state = {};
  render() {
    return (
      <div className="headerTopContainer">
        <div className="headerTop">
          <div className="left">
            <div className="navIcon">
              <img src="./images/Group 770.svg" />
            </div>
            <div className="headerLogo">
              <img src="./images/Group 769.svg" />
            </div>
          </div>
          <div className="middel">
            <div className="headerArrow">
              <img src="./images/Path 797.svg" />
            </div>
            <p className="offerText">
              Valentine’s Day Offers! Buy Two Get One Free{" "}
              <a className="shopNow" href="#">
                Shop Now
              </a>
            </p>
            <div className="headerArrow">
              <img src="./images/Path 796.svg" />
            </div>
          </div>
          <div className="right">
            <div className="contact">
              <div className="imageContainer">
                <img src="./images/Group 756.svg" />
              </div>
              <p className="text">Contat Us</p>
            </div>
            <div className="trackOrder">
              <div className="imageContainer">
                <img src="./images/Group 758.svg" />
              </div>
              <p className="text">Track Order</p>
            </div>
            <div className="findAStore">
              <div className="imageContainer">
                <img src="./images/Group 753.svg" />
              </div>
              <p className="text">Find A Store</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderTop;
