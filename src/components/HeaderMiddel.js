import React, { Component } from "react";

class HeaderMiddel extends Component {
  state = {};
  render() {
    return (
      <div className="headerMiddelContainer">
        <div className="headerMiddel">
          <div className="input">
            <div className="searchIcon">
              <img src="./images/Path 774.svg" alt="search icon" />
            </div>
            <input type="text" placeholder="Search" />
          </div>
          <div className="middel">
            <div className="brand">
              <img src="./images/Group 745.svg" alt="brand logo" />
            </div>
          </div>
          <div className="right">
            <div onClick={this.props.openMyCart} className="cart">
              <div className="numberOfItems">
                <div className="backgourdContainer">
                  <img src="./images/Rectangle 669.svg" alt="" />
                </div>
                <p className="cartItemsQuantity">
                  {this.props.itemsInCart.length}
                </p>
              </div>
              <div className="imageContainer">
                <img src="./images/Path 772.svg" alt="cart icon" />
              </div>
              <p className="text">Cart</p>
            </div>
            <div className="wishList">
              <div className="imageContainer">
                <img src="./images/Path 771.svg" alt="whish list icon" />
              </div>
              <p className="text">Wishlist</p>
            </div>
            <div className="login">
              <div className="imageContainer">
                <img src="./images/Path 773.svg" alt="login icon" />
              </div>
              <p className="text">Login</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderMiddel;
