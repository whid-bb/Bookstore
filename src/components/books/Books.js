import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllAction } from '../../redux/books/books';
import { loadedOnStartAction } from '../../redux/books/booksLoad';
import Book from './Book';
import Addbook from './Addbook';
import style from './Books.module.scss';

function Books() {
  const books = useSelector((state) => state.books);
  const initialLoad = useSelector((state) => state.booksLoad);
  // console.log(books);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(initialLoad.initLoad);
    if (!initialLoad.initLoad) {
      dispatch(getAllAction());
      dispatch(loadedOnStartAction());
    }
  }, []);

  const reloadList = () => {
    dispatch(getAllAction());
  };
  // console.log(books);
  return (
    <>
      <ul className={style.booksList}>
        {Object.keys(books).map((book, index) => (
          <Book
            key={book}
            bookId={book}
            title={books[book][0].title}
            author={books[book][0].author}
            animationDelay={index * 20}
          />
        ))}
      </ul>
      <button type="button" onClick={() => reloadList()}>Reload list</button>
      <Addbook />
    </>
  );
}

export default Books;
