import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import booksReducer from './books/books';
import categoriesReducer from './categoties/categories';
import booksLoadReducer from './books/booksLoad';

const store = configureStore({
  reducer: {
    books: booksReducer,
    categories: categoriesReducer,
    booksLoad: booksLoadReducer,
  },
  middleware: [thunk],
});

export default store;
