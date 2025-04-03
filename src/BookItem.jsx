const BookItem = ({ name, price, author }) => {
    return (
      <div className="book-card">
        <h3>{name}</h3>
        <p>Author: {author}</p>
        <p>Price: ${price}</p>
        <button>Add to Cart</button>
      </div>
    );
  };
  
  export default BookItem;
  