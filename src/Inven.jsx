import React, { Component } from "react";

class InventoryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookTitle: "",
      bookCount: null,
    };

    // Sample dataset of books and their quantities
    this.inventory = {
      "Harry Potter": 10,
      "Lord of the Rings": 5,
      "The Hobbit": 8,
      "Percy Jackson": 12,
    };
  }

  handleChange = (event) => {
    this.setState({ bookTitle: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { bookTitle } = this.state;
    const bookCount = this.inventory[bookTitle] || "Not found";
    this.setState({ bookCount });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="bookTitle"
            placeholder="Enter Book Title"
            value={this.state.bookTitle}
            onChange={this.handleChange}
          />
          <button type="submit">Check Quantity</button>
        </form>
        {this.state.bookCount !== null && (
          <p>Quantity: {this.state.bookCount}</p>
        )}
      </div>
    );
  }
}

export default InventoryForm;
