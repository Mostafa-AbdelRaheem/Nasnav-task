import React, { Component } from "react";

class ProductCard extends Component {
  state = {};
  render() {
    // console.log("Hello card", this.props);
    return (
      <div className="productCardContainer">
        {this.props.product && (
          <>
            <div className="visualContentContainer">
              <div className="imageContainer">
                <img src={this.props.product.gallery[0]} />
              </div>
              <div className="imageRotationContainer">
                <img src="./images/Group 338.svg" />
              </div>
            </div>
            <div className="cardBottom">
              <div className="description">
                {this.props.product.description}
              </div>
              <div className="middelContainer">
                <div className="priceContainer">
                  <div className="price">{this.props.product.price}</div>
                  {this.props.product.discount && (
                    <div className="discountContainer">
                      <div className="beforePrice">
                        {this.props.product.price}
                      </div>
                      <div className="discout">
                        {this.props.product.discount}
                      </div>
                    </div>
                  )}
                </div>
                <div className="brandImage">
                  <img src={this.props.product.brandImage} />
                </div>
              </div>
              <div className="reviewsContainer">
                <div className="starsMainContainer">
                  {Array(Math.floor(this.props.product.rate))
                    .fill()
                    .map((_, i) => (
                      <div key={i} className="starContainer">
                        <img className="stars" src="./images/Path 368.svg" />
                      </div>
                    ))}

                  {Array(
                    this.props.product.maxRate -
                      Math.floor(this.props.product.rate)
                  )
                    .fill()
                    .map((_, i) => (
                      <div key={i} className="starContainer">
                        <img className="stars" src="./images/Path 369.svg" />
                      </div>
                    ))}
                </div>
                <div className="rating">
                  <p className="ratingText">
                    {this.props.product.rate} of {this.props.product.maxRate}
                  </p>
                </div>
              </div>
              <div className="locationContainer">
                {this.props.product.from !== "Genena Mall" ? (
                  <div className="location">
                    <p className="destination">
                      From : <span> {this.props.product.from} </span>
                    </p>
                    <p className="destination">
                      To : <span> {this.props.product.to}</span>
                    </p>
                    <p className="destination">
                      in : <span> {this.props.product.in}</span> Days
                    </p>
                  </div>
                ) : (
                  <div className="location">
                    <p className="destination">
                      Pickup From: <span>{this.props.product.from}</span>{" "}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default ProductCard;
