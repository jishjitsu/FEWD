import React, { Component } from "react";

class BookCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: 0,
      totalRevenue: 0,
    };
  }

  addBook = (amount) => {
    this.setState((prevState) => ({
      books: prevState.books + 1,
      totalRevenue: prevState.totalRevenue + amount,
    }));
  };

  render() {
    return (
      <div>
        <h3>Books Sold: {this.state.books}</h3>
        <h3>Total Revenue: ${this.state.totalRevenue.toFixed(2)}</h3>
        <button onClick={() => this.addBook(15.99)}>Sell a Book</button>
      </div>
    );
  }
}

export default BookCounter;
