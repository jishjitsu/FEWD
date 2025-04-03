import React, { Component } from "react";

class DiscountCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      originalPrice: 100,
      discount: 10,
    };
  }

  applyDiscount = () => {
    this.setState((prevState) => ({
      originalPrice: prevState.originalPrice * ((100 - prevState.discount) / 100),
    }));
  };

  render() {
    return (
      <div>
        <h3>Original Price: ${this.state.originalPrice.toFixed(2)}</h3>
        <h3>Discount: {this.state.discount}%</h3>
        <button onClick={this.applyDiscount}>Apply Discount</button>
      </div>
    );
  }
}

export default DiscountCalculator;
