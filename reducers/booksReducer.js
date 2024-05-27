// reducers/booksReducer.js
const initialState = {
    allBooks: [],
  };
  
  const booksReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_ALL_BOOKS':
        return {
          ...state,
          allBooks: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default booksReducer;
  