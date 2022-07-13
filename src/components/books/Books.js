import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllAction } from '../../redux/books/books';
import Book from './Book';
import Addbook from './Addbook';

function Books() {
  const books = useSelector((state) => state.books);
  // console.log(books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllAction());
  }, []);
  // console.log(books);
  return (
    <>
      <ul>
        {Object.keys(books).map((book) => (
          <Book
            key={book}
            bookId={book}
            title={books[book][0].title}
            author={books[book][0].author}
          />
        ))}
      </ul>
      <Addbook />
    </>
  );
}

export default Books;
