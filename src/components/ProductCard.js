import React, { Component } from "react";

class ProductCard extends Component {
  state = {};
  render() {
    console.log("Hello card", this.props);
    return (
      <div className="productCardContainer">
        {this.props.product && (
          <>
            <div className="imageContainer">
              <img src={this.props.product.gallery[0]} />
            </div>
            <div className="description">{this.props.product.description}</div>
            <div className="middelContainer">
              <div className="priceContainer">
                <div className="price">{this.props.product.price}</div>
                <div className="discountContainer">
                  <div className="beforePrice">{this.props.product.price}</div>
                  <div className="discout">{this.props.product.discount}</div>
                </div>
              </div>
              <div className="brandImage">
                <img src={this.props.product.brandImage} />
              </div>
            </div>
            <div className="reviewsContainer">
              <div className="stars"></div>
              <div className="rating">
                <p>{this.props.product.rate}</p>
              </div>
            </div>
            <div className="locationContainer">
              {this.props.product.from !== "Genena Mall" ? (
                <div className="location">
                  <p>
                    From : <span> {this.props.product.from} </span>
                  </p>
                  <p>
                    To : <span> {this.props.product.to}</span>
                  </p>
                  <p>
                    in : <span> {this.props.product.in}</span> Days
                  </p>
                </div>
              ) : (
                <div className="location">
                  <p>
                    Pickup From: <span>{this.props.product.from}</span>{" "}
                  </p>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    );
  }
}

export default ProductCard;
