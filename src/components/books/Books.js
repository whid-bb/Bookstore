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
  const dispatch = useDispatch();
  const ANIMATION_DELAY = 170;

  useEffect(() => {
    if (!initialLoad.initLoad) {
      dispatch(getAllAction());
      setTimeout(() => dispatch(loadedOnStartAction()), 2500);
    }
  }, []);

  const reloadList = () => {
    dispatch(getAllAction());
  };

  return (
    <>
      <ul className={style.booksList}>
        {Object.keys(books).map((book, index) => (
          <Book
            key={book}
            bookId={book}
            title={books[book][0].title}
            author={books[book][0].author}
            animationDelay={index * ANIMATION_DELAY}
            booksLoaded={initialLoad.initLoad}
          />
        ))}
      </ul>
      <button type="button" style={{ display: 'none' }} onClick={() => reloadList()}>Reload list</button>
      <Addbook />
    </>
  );
}

export default Books;
