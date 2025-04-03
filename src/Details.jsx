const BookDetails = ({ title, author, price }) => {
    return (
      <div>
        <h3>{title}</h3>
        <p>Author: {author}</p>
        <p>Price: ${price}</p>
      </div>
    );
  };
  
  export default BookDetails;
  