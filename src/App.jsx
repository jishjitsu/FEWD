import React from "react";
import DailySpecial from "./Daily";
import BookCounter from "./BookCounter";
import BookList from "./book";
import InventoryForm from "./Inven";
import LibraryApp from "./LibraryApp";
import BookDetails from "./Details";
import DiscountCalculator from "./Discount";

// Sample book data for BookList
const booksData = [
  { id: 1, name: "The Great Gatsby", price: 15.99, author: "F. Scott Fitzgerald" },
  { id: 2, name: "To Kill a Mockingbird", price: 12.99, author: "Harper Lee" },
  { id: 3, name: "1984", price: 10.99, author: "George Orwell" },
];

const App = () => {
  return (
    <div>
      <h1>Welcome to the Book Store</h1>
      
      {/* JSX Component - Daily Special */}
      <DailySpecial />
      
      <hr />

      {/* Class Component - Book Counter */}
      <BookCounter />

      <hr />

      {/* Functional Component with Props - Book List */}
      <h2>Available Books</h2>
      <BookList items={booksData} />

      <hr />

      {/* State Management - Inventory Form */}
      <h2>Inventory Management</h2>
      <InventoryForm />

      <hr />

      {/* Parent-Child Communication - Library App */}
      <h2>Library App</h2>
      <LibraryApp />

      <hr />

      {/* Props Destructuring - Book Details */}
      <h2>Book Details Example</h2>
      <BookDetails title="Moby Dick" author="Herman Melville" price={14.99} />

      <hr />

      {/* setState in Depth - Discount Calculator */}
      <h2>Discount Calculator</h2>
      <DiscountCalculator />
    </div>
  );
};

export default App;
