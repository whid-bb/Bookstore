const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';

const booksReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [...state, {
        id: action.id,
        title: action.title,
        author: action.author,
      }];
    case REMOVE:
      return state.filter((el) => el.id !== action.id);
    default:
      return state;
  }
};

export const addAction = ({ id, title, author }) => ({
  type: ADD,
  id,
  title,
  author,
});

export const removeAction = ({ id }) => ({
  type: REMOVE,
  id,
});

export default booksReducer;
