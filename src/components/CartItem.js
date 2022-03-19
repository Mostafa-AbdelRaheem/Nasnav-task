import React, { Component } from "react";

class CartItem extends Component {
  state = {};
  render() {
    return (
      <div className="ItemCard">
        <div className="imageContainer">
          <img src={this.props.itemData.image} alt="" />
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
              <button
                onClick={() =>
                  this.props.onRemovingItem(this.props.itemData.id)
                }
                className="removeBtn"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CartItem;
