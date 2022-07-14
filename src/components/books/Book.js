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
      <div className={style.bookData}>
        <div className={style.title}>{title}</div>
        <div className={style.author}>{author}</div>

        <div className={style.crud}>
          <button type="button">Comments</button>
          <button onClick={() => removeBook(bookId)} type="button">Remove</button>
          <button type="button">Edit</button>
        </div>

      </div>
      <div className={style.progressContainer}>
        <div className={style.progressWrap}>
          <div className={style.progress}>
            <div className={`${style.mask} ${style.full}`}>
              <div className={style.fill} />
            </div>
            <div className={`${style.mask}`}>
              <div className={style.fill} />
            </div>
            <div className={style.insideCircle}>
              <span>75%</span>
            </div>
          </div>
        </div>

      </div>

      <div className={style.updateContainer}>
        <div className={style.chapter}>CURRENT CHAPTER</div>
        <div className={style.currentChapter}>Chapter 3</div>
        <button type="button"> UPDATE PROGRESS </button>
      </div>
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
