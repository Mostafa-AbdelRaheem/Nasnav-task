import "./App.css";
import React, { Component } from "react";
import ProductPage from "./pages/productPage";
import productData from "./services/data.json";

class App extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    this.setState({ products: productData });
  }

  render() {
    return (
      <div className="App">
        <ProductPage products={this.state.products} />
      </div>
    );
  }
}

export default App;
