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

  handleRemovingFromCart = (id) => {
    const index = this.state.myCart.findIndex((item) => item.id === id);
    // const index=state.items.findIndex(item=>item.id===aid)
    let newBasket = [...this.state.myCart];
    if (index >= 0) {
      newBasket.splice(index, 1);
    } else {
      console.warn("Can not remove unexisting item!!");
    }
    this.setState({ myCart: newBasket });
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
            <img src="./images/shopping-loader.gif" alt="loading gif" />
          </div>
        ) : (
          <ProductPage
            itemsInCart={this.state.myCart}
            products={this.state.products}
            onAddingItem={this.handleAddingToCart}
            onRemovingItem={this.handleRemovingFromCart}
            myCart={this.state.myCart}
          />
        )}
      </div>
    );
  }
}

export default App;
