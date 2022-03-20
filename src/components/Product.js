import React, { Component } from "react";
import StarGenerator from "./StarGenerator";
import "../styles/components/product.scss";

class Product extends Component {
  state = {
    selectedColorAttrib: 0,
    selectedSizeAttrib: 2,
    quantity: 1,
  };

  handleSizeAttrib = (index) => {
    this.setState({ selectedSizeAttrib: index });
  };

  selectedColorAttrib = (index) => {
    this.setState({ selectedColorAttrib: index });
  };
  handlePrice = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

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
                  {this.handlePrice(this.props.product.price)}
                  <span className="currency">
                    {" "}
                    {this.props.product.currency}
                  </span>
                </p>
                <p className="beforePrice">
                  {this.handlePrice(this.props.product.price)}
                  <span className="currency"></span>
                </p>
                <div className="discountContainer">
                  <p className="discount">{this.props.product.discount} off</p>
                </div>
              </div>
              <div className="sizeContainer">
                <h3 className="sizeHeader">Size</h3>
                <ul className="sizeList">
                  {this.props.product.size.map((size, index) => (
                    <li
                      onClick={() => this.handleSizeAttrib(index)}
                      className={`${
                        this.state.selectedSizeAttrib === index
                          ? "size selected"
                          : "size"
                      }`}
                      key={index}
                    >
                      {size}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="colorContainer">
                <h3 className="colorHeader">Color</h3>
                <ul className="colorList">
                  {this.props.product.color.map((path, index) => (
                    <li
                      onClick={() => this.selectedColorAttrib(index)}
                      className={`${
                        this.state.selectedColorAttrib === index
                          ? "color selected"
                          : "color"
                      }`}
                      key={index}
                    >
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
                  <div className="quantity">{this.state.quantity}</div>
                  <button className="decrement">
                    <img alt="" src="./images/Path 364.svg" />
                  </button>
                </div>
              </div>
              <div className="orderContainer">
                <button
                  onClick={() => this.props.onAddingItem(this.props.product.id)}
                  className="cartBtn"
                >
                  Add To Cart
                </button>

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
