import PropTypes from 'prop-types';

function Book(props) {
  const { bookId, title, author } = props;
  return (
    <li>
      {bookId}
      {title}
      {author}
      <button type="button">Remove</button>
    </li>
  );
}

Book.propTypes = {
  bookId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
