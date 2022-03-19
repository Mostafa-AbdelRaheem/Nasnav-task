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
  };
  handleOpeningMyCart = () => {
    this.setState({ myCartStatus: true });
  };
  render() {
    return (
      <div>
        <Header
          itemsInCart={this.props.itemsInCart}
          openMyCart={this.handleOpeningMyCart}
        />
        <Product
          onAddingItem={this.props.onAddingItem}
          product={this.props.products[0]}
        />
        <SimilarProducts
          selectedProduct={this.props.products[0]}
          products={this.props.products}
        />
        <Footer />
        {this.state.myCartStatus && (
          <MyCart
            myCart={this.props.myCart}
            closeMyCart={this.handleClosingMyCart}
            onRemovingItem={this.props.onRemovingItem}
          />
        )}
      </div>
    );
  }
}

export default ProductPage;
