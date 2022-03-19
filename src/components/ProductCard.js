import React, { Component } from "react";
import HandlePrice from "./HandlePrice";
import StarGenerator from "./StarGenerator";

class ProductCard extends Component {
  state = {};
  render() {
    return (
      <div className="productCardContainer">
        {this.props.product && (
          <>
            <div className="visualContentContainer">
              <div className="imageContainer">
                <img src={this.props.product.gallery[0]} alt="mainImage" />
              </div>
              <div className="imageRotationContainer">
                <img src="./images/Group 338.svg" alt="360 icon" />
              </div>
            </div>
            <div className="cardBottom">
              <div className="description">
                {this.props.product.description}
              </div>
              <div className="middelContainer">
                <div className="priceContainer">
                  <div className="price">
                    <HandlePrice
                      currency={this.props.product.currency}
                      price={this.props.product.price}
                    />
                  </div>
                  {this.props.product.discount && (
                    <div className="discountContainer">
                      <div className="beforePrice">
                        <HandlePrice
                          currency={this.props.product.currency}
                          price={this.props.product.price}
                        />
                      </div>
                      <div className="discout">
                        {this.props.product.discount}
                      </div>
                    </div>
                  )}
                </div>
                <div className="brandImage">
                  <img src={this.props.product.brandImage} alt="" />
                </div>
              </div>
              <div className="reviewsContainer">
                <div className="starsMainContainer">
                  <StarGenerator
                    fullStarSrcPath={"./images/Path 368.svg"}
                    emptyStarSrcPath={"./images/Path 369.svg"}
                    rate={this.props.product.rate}
                    maxRate={this.props.product.maxRate}
                  />
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
