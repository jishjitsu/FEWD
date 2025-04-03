import BookItem from "./BookItem";

const BookList = ({ items }) => {
  return (
    <div>
      {items.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
};

export default BookList;
