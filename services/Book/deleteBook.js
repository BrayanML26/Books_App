// src/services/deleteBook.js
import apiClient from '../Config/apiConfig';

const deleteBook = async (bookId) => {
  try {
    await apiClient.delete(`/book/${bookId}`);
    return true;
  } catch (error) {
    console.error('Error al eliminar el libro:', error);
    return false;
  }
};

export default deleteBook;
