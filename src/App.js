import "./App.css";
import React, { Component } from "react";
import ProductPage from "./pages/productPage";
import productData from "./services/data.json";

class App extends Component {
  state = {
    products: [],
    myCart: [],
  };
  handleAddingToCart = (id) => {
    // console.log("item Id", id);
    if (this.state.products.length !== 0) {
      const item = this.state.products.filter((item) => item.id === id);
      // console.log("item", item[0]);
      // console.log("my cart before", this.state.myCart);
      this.setState({ myCart: [...this.state.myCart, item[0]] });
      // console.log("my cart after", this.state.myCart);
    }
  };

  componentDidMount() {
    this.setState({ products: productData });
  }

  render() {
    return (
      <div className="App">
        <ProductPage
          itemsInCart={this.state.myCart}
          products={this.state.products}
          onAddingItem={this.handleAddingToCart}
          myCart={this.state.myCart}
        />
      </div>
    );
  }
}

export default App;
