import React, { Component } from "react";
import CartItem from "./CartItem";

class MyCart extends Component {
  state = {};
  render() {
    console.log("myCart props", this.props);
    return (
      <div className="myCartMainContainer">
        <div className="overLay"></div>
        <div className="mianContentContainer">
          <div onClick={this.props.closeMyCart} className="closeImageContainer">
            <img src="./images/Group 1440.svg" />
          </div>
          <h1 className="mainCartTitle">My Cart</h1>
          <h3 className="mainCartHeader">Cart Summary</h3>
          {this.props.myCart.map((item, index) => (
            <CartItem key={index} itemData={item} />
          ))}

          {/* adsasd */}
          <h2 className="totalPrice">Total: 19,999 LE</h2>
          <div className="buttonContainer">
            <button className="reviewBtn">Review Cart</button>
            <button className="checkoutBtn">Complete Checkout</button>
          </div>
        </div>
      </div>
    );
  }
}

export default MyCart;
