// src/services/addBook.js
import apiClient from '../Config/apiConfig';

export const addBook = async (bookData) => {
  try {
    await apiClient.post('/book', bookData);
    return true;
  } catch (error) {
    console.error('Error adding book:', error);
    return false;
  }
};
