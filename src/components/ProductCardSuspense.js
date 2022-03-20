import React, { Component } from "react";
import "../styles/components/productCardSuspense.scss";

class ProductCardSuspense extends Component {
  state = {};
  render() {
    return (
      <div className="suspenseProductCardContainer">
        <div className="suspenseImageContainer">
          <img src="./images/load-loading.gif" alt="loading gif" />
        </div>
      </div>
    );
  }
}

export default ProductCardSuspense;
