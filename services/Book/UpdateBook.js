// src/services/updateBook.js
import apiClient from '../Config/apiConfig';

export const fetchBookDetails = async (bookId, setTitle, setAuthor, setDescription, setCoverUrl) => {
  try {
    const response = await apiClient.get(`/book/${bookId}`);
    const { title, author, description, cover } = response.data;
    setTitle(title);
    setAuthor(author);
    setDescription(description);
    setCoverUrl(cover);
  } catch (error) {
    console.error('Error al obtener los detalles del libro:', error);
  }
};

export const updateBook = async (bookId, bookData, navigation) => {
  try {
    await apiClient.put(`/book/${bookId}`, bookData);
    navigation.goBack();
  } catch (error) {
    console.error('Error al actualizar el libro:', error);
  }
};
