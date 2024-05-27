// store/index.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers'; // Importa tus reducers

const store = configureStore({
  reducer: rootReducer,
});

export default store;
