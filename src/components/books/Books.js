import { useState } from 'react';
import Book from './Book';
import Addbook from './Addbook';

function Books() {
  const [books] = useState(
    [
      {
        id: 1,
        title: 'testTitle',
        author: 'testAuthor',
      },
      {
        id: 2,
        title: 'testTitle1',
        author: 'testAuthor1',
      },
    ],
  );

  return (
    <>
      <ul>
        {books.map((book) => (
          <Book
            key={book.id}
            bookId={book.id}
            title={book.title}
            author={book.author}
          />
        ))}
      </ul>
      <Addbook />
    </>
  );
}

export default Books;
