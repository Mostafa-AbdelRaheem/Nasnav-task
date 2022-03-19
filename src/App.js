import "./App.css";
import React, { Component } from "react";
import ProductPage from "./pages/productPage";
import { getData } from "./services/Data";

class App extends Component {
  state = {
    products: [],
    myCart: [],
  };
  handleAddingToCart = (id) => {
    if (this.state.products.length !== 0) {
      const item = this.state.products.filter((item) => item.id === id);
      this.setState({ myCart: [...this.state.myCart, item[0]] });
    }
  };

  componentDidMount() {
    getData()
      .then((res) => this.setState({ products: res }))
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    return (
      <div className="App">
        {this.state.products.length === 0 ? (
          <div className="container">
            <img src="./images/shopping-loader.gif" />
          </div>
        ) : (
          <ProductPage
            itemsInCart={this.state.myCart}
            products={this.state.products}
            onAddingItem={this.handleAddingToCart}
            myCart={this.state.myCart}
          />
        )}
      </div>
    );
  }
}

export default App;
