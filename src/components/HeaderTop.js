import React, { Component } from "react";
import "../styles/components/headerTop.scss";

class HeaderTop extends Component {
  state = {};
  render() {
    return (
      <div className="headerTopContainer">
        <div className="headerTop">
          <div className="left">
            <div className="navIcon">
              <img src="./images/Group 770.svg" alt="" />
            </div>
            <div className="headerLogo">
              <img src="./images/Group 769.svg" alt="company logo" />
            </div>
          </div>
          <div className="middel">
            <div className="headerArrow">
              <img src="./images/Path 797.svg" alt="right arrow" />
            </div>
            <p className="offerText">
              Valentine’s Day Offers! Buy Two Get One Free{" "}
              <span className="shopNow">Shop Now</span>
            </p>
            <div className="headerArrow">
              <img src="./images/Path 796.svg" alt="left arrow" />
            </div>
          </div>
          <div className="right">
            <div className="contact">
              <div className="imageContainer">
                <img src="./images/Group 756.svg" alt="contact Icon" />
              </div>
              <p className="text">Contat Us</p>
            </div>
            <div className="trackOrder">
              <div className="imageContainer">
                <img src="./images/Group 758.svg" alt="track order Icon" />
              </div>
              <p className="text">Track Order</p>
            </div>
            <div className="findAStore">
              <div className="imageContainer">
                <img src="./images/Group 753.svg" alt="find store Icon" />
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
