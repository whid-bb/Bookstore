import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addAction } from '../../redux/books/books';
import style from './Addbook.module.scss';

function Addbook() {
  const initFormState = {
    title: '',
    author: '',
  };

  const [book, setBook] = useState(initFormState);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const resetForm = () => {
    setBook({ ...book, title: '', author: '' });
  };

  const submitForm = (e) => {
    e.preventDefault();
    const { title, author } = book;

    dispatch(addAction(title, author));
    resetForm();
  };

  return (
    <form className={style.form} onSubmit={submitForm}>
      <div className={style.header}>ADD NEW BOOK</div>
      <div className={style.inputContainer}>
        <input
          className={style.inputAuthor}
          required
          type="text"
          placeholder="Title"
          name="title"
          value={book.title}
          onChange={handleInputChange}
        />
        <input
          required
          type="text"
          placeholder="Category"
          name="author"
          value={book.author}
          onChange={handleInputChange}
        />
        <button type="submit">Add new book</button>
      </div>
    </form>
  );
}

export default Addbook;
