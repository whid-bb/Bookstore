const ITEMS_LOADED = 'ITEMS_LOADED';

const initialState = {
  initLoad: false,
};

const booksLoadReducer = (state = initialState, action) => {
  switch (action.type) {
    case ITEMS_LOADED:
      return { ...state, initLoad: true };
    default:
      return state;
  }
};

export const loadedOnStartAction = () => ({ type: ITEMS_LOADED });

export default booksLoadReducer;
