import React, { Component } from "react";

class AddBookForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      author: "",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addBook(this.state);
    this.setState({ title: "", author: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Book Title"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={this.state.author}
          onChange={this.handleChange}
        />
        <button type="submit">Add Book</button>
      </form>
    );
  }
}

export default AddBookForm;
