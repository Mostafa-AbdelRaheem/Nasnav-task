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
            <img src="./images/load-loading.gif" alt="loading gif" />
          </div>
        </div>
      </div>
    );
  }
}

export default ProductCardSuspense;
