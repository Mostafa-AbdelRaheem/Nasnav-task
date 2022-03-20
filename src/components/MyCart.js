import React, { Component } from "react";
import CartItem from "./CartItem";
import "../styles/components/myCart.scss";

class MyCart extends Component {
  handleTotalCost = () => {
    if (this.props.myCart === 0) {
      return 0;
    } else {
      const costArray = this.props.myCart.map((item, index) => item.price);
      const sum = costArray.reduce((partialSum, a) => partialSum + a, 0);
      let result = sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return result;
    }
  };
  state = {};
  render() {
    return (
      <div className="myCartMainContainer">
        <div className="overLay"></div>
        <div className="mianContentContainer">
          <div onClick={this.props.closeMyCart} className="closeImageContainer">
            <img src="./images/Group 1440.svg" alt="closeimage" />
          </div>
          <h1 className="mainCartTitle">My Cart</h1>
          <h3 className="mainCartHeader">Cart Summary</h3>
          <div className="ItemCardContainer">
            {this.props.myCart.map((item, index) => (
              <CartItem
                onRemovingItem={this.props.onRemovingItem}
                key={index}
                itemData={item}
              />
            ))}
          </div>
          <h2 className="totalPrice">Total: {this.handleTotalCost()} LE</h2>
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
