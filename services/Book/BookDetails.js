// src/services/BookDetails.js
import apiClient from '../Config/apiConfig';

const fetchBookDetails = async (bookId) => {
  try {
    const response = await apiClient.get(`/book/${bookId}`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener los detalles del libro:', error);
    throw error;
  }
};

export default fetchBookDetails;
