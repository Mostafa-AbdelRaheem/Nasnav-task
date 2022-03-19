import React, { Component } from "react";

class ProductCardSuspense extends Component {
  state = {};
  render() {
    return (
      <div
        style={{ width: "268px", height: "440px" }}
        className="productCardContainer"
      >
        <div className="visualContentContainer">
          <div
            style={{ width: "254px", height: "254px" }}
            className="imageContainer"
          >
            <img src="./images/load-loading.gif" />
          </div>
        </div>
        <div className="cardBottom">
          <div className="description"></div>
          <div className="middelContainer">
            <div className="priceContainer">
              <div className="price"></div>
            </div>
            <div className="brandImage">
              <img />
            </div>
          </div>
          <div className="reviewsContainer">
            <div className="starsMainContainer"></div>
            <div className="rating">
              <p className="ratingText"></p>
            </div>
          </div>
          <div className="locationContainer"></div>
        </div>
      </div>
    );
  }
}

export default ProductCardSuspense;
