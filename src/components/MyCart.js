import React, { Component } from "react";

class MyCart extends Component {
  state = {};
  render() {
    return (
      <div className="myCartMainContainer">
        <div className="overLay"></div>
        <div className="mianContentContainer">
          <div onClick={this.props.closeMyCart} className="closeImageContainer">
            <img src="./images/Group 1440.svg" />
          </div>
          <h1 className="mainCartTitle">My Cart</h1>
          <h3 className="mainCartHeader">Cart Summary</h3>
          <div className="purschasedItemCardContainer">
            <div className="purschasedItemCard">
              <div className="imageContainer">
                <img src="./dynamic/Group 1441@2x.png" />
              </div>
              <div className="contentContainer">
                <div className="description">
                  Lorem ipsum dolor sit amet, consecte adipiscing elit.
                </div>
                <div className="quantity">
                  Quantity <span>1</span>
                </div>
                {/* <div className="price"></div> */}
                <p className="currentPrice">
                  {/* {this.props.product.price} */}
                  9,999
                  <span className="currency">
                    {" "}
                    LE
                    {/* {this.props.product.currency} */}
                  </span>
                </p>
                <button className="removeBtn">Remove</button>
              </div>
            </div>
          </div>
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
