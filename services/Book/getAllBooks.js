// src/services/bookService.js
import apiClient from '../Config/apiConfig';

export const getAllBooks = async () => {
  try {
    const response = await apiClient.get('/book');
    return response.data;
  } catch (error) {
    console.error('Error al obtener los libros:', error);
    throw error;
  }
};
