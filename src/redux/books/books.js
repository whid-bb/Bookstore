import { v4 as uuidv4 } from 'uuid';
import BookService from '../../services/BooksService';

const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';
const GET_ALL = 'bookstore/books/GET_ALL';

const initState = {
  1: [
    {
      title: 'TestTitle',
      author: 'TestAuthor',
    },
  ],
  2: [
    {
      title: 'TestTitlePart2',
      author: 'TestAuthorPart2',
    },
  ],
};

const booksReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_ALL:
      return action.payload;
    case ADD:
      return { ...state, ...action.payload };
    case REMOVE:
      // eslint-disable-next-line max-len
      return Object.fromEntries(Object.entries(state).filter((book) => book[0] !== action.payload.id));
    default:
      return state;
  }
};

export const getAllAction = () => async (dispatch) => {
  try {
    const res = await BookService.getAll();
    dispatch({
      type: GET_ALL,
      payload: res.data,
    });
  } catch (err) {
    throw new Error(err);
  }
};

export const addAction = (title, author) => async (dispatch) => {
  try {
    // eslint-disable-next-line camelcase
    const item_id = uuidv4();
    const category = null;
    const newBook = {
      // eslint-disable-next-line camelcase
      item_id,
      title,
      author,
      category,
    };
    await BookService.add(newBook);
    dispatch({
      type: ADD,
      payload: {
        // eslint-disable-next-line camelcase
        [item_id]: [
          {
            title,
            author,
            category,
          },
        ],
      },
    });
  } catch (err) {
    throw new Error(err);
  }
};

export const removeAction = (id) => async (dispatch) => {
  try {
    await BookService.remove(id);
    dispatch({
      type: REMOVE,
      payload: { id },
    });
  } catch (err) {
    throw new Error(err);
  }
};

export default booksReducer;
