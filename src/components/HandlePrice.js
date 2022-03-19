import React, { Component } from "react";
class HandlePrice extends Component {
  state = {};
  handlePrice = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  render() {
    return (
      <>
        {this.handlePrice(this.props.price)}

        <span className="currency"> {this.props.currency}</span>
      </>
    );
  }
}

export default HandlePrice;
