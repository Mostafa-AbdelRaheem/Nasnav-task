import React, { Component } from "react";
import HandlePrice from "./HandlePrice";
import StarGenerator from "./StarGenerator";

class Product extends Component {
  render() {
    return (
      <div className="productContainer">
        {this.props.product && (
          <>
            <div className="visualContainer">
              <div className="mainImageContainer">
                <img src={this.props.product.image} alt="" />
              </div>
              <div className="imageRotationContainer">
                <img alt="" src="./images/Group 338.svg" />
              </div>
              <div className="galleryContainer">
                <div className="galleryArrow">
                  <img alt="" src="./images/Path 347.svg" />
                </div>
                <ul className="gallery">
                  {this.props.product.gallery.map((path, index) => (
                    <li key={index}>
                      <div className="imageContainer">
                        <img alt="" src={path} />
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="galleryArrow">
                  <img alt="" src="./images/Path 346.svg" />
                </div>
              </div>
            </div>
            <div className="contentContainer">
              <div className="brandImage">
                <img alt="" src={this.props.product.brandImage} />
              </div>
              <div className="description">
                <p className="text">{this.props.product.description}</p>
              </div>
              <div className="category">
                <p className="categoryText">{this.props.product.category}</p>
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
                <div className="votes">
                  <p className="votesText">{this.props.product.votes}</p>
                </div>
              </div>
              <div className="priceContainer">
                <p className="currentPrice">
                  <HandlePrice
                    currency={this.props.product.currency}
                    price={this.props.product.price}
                  />
                </p>
                <p className="beforePrice">
                  <HandlePrice
                    currency={this.props.product.currency}
                    price={this.props.product.price}
                  />
                </p>
                <div className="discountContainer">
                  <p className="discount">{this.props.product.discount} off</p>
                </div>
              </div>
              <div className="sizeContainer">
                <h3 className="sizeHeader">Size</h3>
                <ul className="sizeList">
                  {this.props.product.size.map((size, index) => (
                    <li className="size" key={index}>
                      {size}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="colorContainer">
                <h3 className="colorHeader">Color</h3>
                <ul className="colorList">
                  {this.props.product.color.map((path, index) => (
                    <li className="color" key={index}>
                      <img alt="" src={path} />
                    </li>
                  ))}
                </ul>
              </div>
              <div className="quantityMainContainer">
                <h3 className="quantityHeader">Quantity</h3>
                <div className="quantityContainer">
                  <button className="increment">
                    <img alt="" src="./images/Path 363.svg" />
                  </button>
                  <div className="quantity">1</div>
                  <button className="decrement">
                    <img alt="" src="./images/Path 364.svg" />
                  </button>
                </div>
              </div>
              <div className="orderContainer">
                {/* <div className="addToCart"> */}
                <button
                  onClick={() => this.props.onAddingItem(this.props.product.id)}
                  className="cartBtn"
                >
                  Add To Cart
                </button>

                {/* <div className="pickFromStore"> */}
                <button className="pickBtn">Pickup From Store</button>
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default Product;
