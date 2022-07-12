import { useSelector } from 'react-redux';
import Book from './Book';
import Addbook from './Addbook';

function Books() {
  const books = useSelector((state) => state.books);

  return (
    <>
      <ul>
        {books.map((book) => (
          <Book
            key={book.id}
            bookId={book.id}
            title={book.title}
            author={book.author}
          />
        ))}
      </ul>
      <Addbook />
    </>
  );
}

export default Books;
