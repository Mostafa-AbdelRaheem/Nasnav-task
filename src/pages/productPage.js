import React, { Component } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Product from "../components/Product";
import SimilarProducts from "../components/SimilarProducts";

class ProductPage extends Component {
  state = {};

  render() {
    // console.log("the props ", this.props);
    return (
      <div>
        <Header />
        <Product product={this.props.products[0]} />
        <SimilarProducts
          selectedProduct={this.props.products[0]}
          products={this.props.products}
        />
        <Footer />
      </div>
    );
  }
}

export default ProductPage;
