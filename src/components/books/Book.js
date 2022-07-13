import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeAction } from '../../redux/books/books';

function Book(props) {
  const { bookId, title, author } = props;
  const dispatch = useDispatch();

  const removeBook = (id) => {
    dispatch(removeAction(id));
  };
  // console.log(bookId);

  return (
    <li>
      {title}
      <br />
      {author}
      <br />
      <button onClick={() => removeBook(bookId)} type="button">Remove</button>
    </li>
  );
}

Book.propTypes = {
  bookId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
