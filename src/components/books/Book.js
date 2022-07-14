import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeAction } from '../../redux/books/books';
import style from './Book.module.scss';

function Book(props) {
  const {
    bookId, title, author, animationDelay, booksLoaded,
  } = props;
  const dispatch = useDispatch();

  const removeBook = (id) => {
    dispatch(removeAction(id));
  };

  return (
    <li className={`${style.book} ${booksLoaded ? style.listLoaded : ''}`} style={{ animationDelay: `${animationDelay}ms` }}>
      {title}
      <br />
      {author}
      <br />
      {animationDelay}
      <br />
      {booksLoaded}
      <br />
      <button onClick={() => removeBook(bookId)} type="button">Remove</button>
    </li>
  );
}

Book.propTypes = {
  bookId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  animationDelay: PropTypes.number.isRequired,
  booksLoaded: PropTypes.bool.isRequired,
};

export default Book;
