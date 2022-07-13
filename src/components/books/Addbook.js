import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addAction } from '../../redux/books/books';

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
    <form onSubmit={submitForm}>
      <input
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
        placeholder="Author"
        name="author"
        value={book.author}
        onChange={handleInputChange}
      />
      <button type="submit">Add new book</button>
    </form>
  );
}

export default Addbook;
