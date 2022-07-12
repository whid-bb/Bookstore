import { useDispatch } from 'react-redux';
import { useRef } from 'react';
import { addAction } from '../../redux/books/books';

function Addbook() {
  const title = useRef(null);
  const author = useRef(null);
  const dispatch = useDispatch();

  const submitForm = (e) => {
    e.preventDefault();

    dispatch(addAction(title.current.value, author.current.value));

    e.target.reset();
  };

  return (
    <form onSubmit={submitForm}>
      <input ref={title} required type="text" name="title" placeholder="Title" />
      <input ref={author} required type="text" name="author" placeholder="Author" />
      <button type="submit">Add new book</button>
    </form>
  );
}

export default Addbook;
