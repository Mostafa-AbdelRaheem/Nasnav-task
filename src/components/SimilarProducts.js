import React, { Component } from "react";
import ProductCard from "./ProductCard";

class SimilarProducts extends Component {
  render() {
    console.log("similar products", this.props);
    // console.log(
    //   "the products",
    //   this.props.products.filter((product) => product.id === 1)
    // );
    return (
      <div className="similarMainProductsContainer">
        <h2 className="similarProductsHeader">Similar Products</h2>
        <p>You may like these products also</p>
        <div className="similarProductsContainer">
          {this.props.products &&
            this.props.products
              .filter((product) => product.id !== 1)
              .map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
        </div>
      </div>
    );
  }
}

export default SimilarProducts;
