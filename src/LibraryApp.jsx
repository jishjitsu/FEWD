import React, { Component } from "react";
import AddBookForm from "./AddForm";

class LibraryApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }

  addBook = (newBook) => {
    this.setState((prevState) => ({
      books: [...prevState.books, newBook],
    }));
  };

  render() {
    return (
      <div>
        <h2>Library</h2>
        <AddBookForm addBook={this.addBook} />
        <ul>
          {this.state.books.map((book, index) => (
            <li key={index}>{book.title} by {book.author}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default LibraryApp;
