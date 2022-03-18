import React, { Component } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MyCart from "../components/MyCart";
import Product from "../components/Product";
import SimilarProducts from "../components/SimilarProducts";

class ProductPage extends Component {
  state = { myCartStatus: false };
  handleClosingMyCart = () => {
    this.setState({ myCartStatus: false });
    // console.log("Closed Mycart");
  };
  handleOpeningMyCart = () => {
    this.setState({ myCartStatus: true });
  };
  render() {
    // console.log("the props ", this.props);

    return (
      <div>
        <Header openMyCart={this.handleOpeningMyCart} />
        <Product product={this.props.products[0]} />
        <SimilarProducts
          selectedProduct={this.props.products[0]}
          products={this.props.products}
        />
        <Footer />
        {this.state.myCartStatus && (
          <MyCart closeMyCart={this.handleClosingMyCart} />
        )}
      </div>
    );
  }
}

export default ProductPage;
