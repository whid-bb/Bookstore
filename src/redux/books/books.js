const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';

const initState = [
  {
    id: 1,
    title: 'TestTitle',
    author: 'TestAuthor',
  },
  {
    id: 2,
    title: 'TestTitlePart2',
    author: 'TestAuthorPart2',
  },
];

const booksReducer = (state = initState, action) => {
  let nextId = 0;
  if ((state.length - 1) < 0) {
    nextId = 0;
  } else {
    nextId = state[state.length - 1].id;
  }
  nextId += 1;

  switch (action.type) {
    case ADD:
      return [...state, {
        id: nextId,
        title: action.title,
        author: action.author,
      }];
    case REMOVE:

      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export const addAction = (title, author) => ({
  type: ADD,
  title,
  author,
});

export const removeAction = (id) => ({
  type: REMOVE,
  id,
});

export default booksReducer;
