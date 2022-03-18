import React, { Component } from "react";

class CartItem extends Component {
  state = {};
  render() {
    console.log("cart Item props", this.props);
    return (
      <div className="ItemCardContainer">
        <div className="ItemCard">
          <div className="imageContainer">
            <img src={this.props.itemData.image} />
          </div>
          <div className="contentContainer">
            <div className="description">{this.props.itemData.description}</div>
            <div className="bottomContainer">
              <div className="quantityPriceContainer">
                <div className="quantity">
                  Quantity <span>1</span>
                </div>
                <div className="price">
                  <p className="currentPrice">
                    {this.props.itemData.price}
                    <span className="currency">
                      {" "}
                      {this.props.itemData.currency}
                    </span>
                  </p>
                </div>
              </div>
              <div className="removeBtnContainer">
                <button className="removeBtn">Remove</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CartItem;
