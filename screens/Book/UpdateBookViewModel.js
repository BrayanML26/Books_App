// src/screens/UpdateBook/UpdateBookViewModel.js
import { useState, useEffect } from 'react';
import { fetchBookDetails, updateBook } from '../../services/Book/UpdateBook';

export default function UpdateBookViewModel(bookId, navigation) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [coverUrl, setCoverUrl] = useState('');

  useEffect(() => {
    fetchBookDetails(bookId, setTitle, setAuthor, setDescription, setCoverUrl);
  }, [bookId]);

  const handleUpdateBook = async () => {
    await updateBook(bookId, { title, author, description, cover: coverUrl }, navigation);
  };

  return {
    title, setTitle,
    author, setAuthor,
    description, setDescription,
    coverUrl, setCoverUrl,
    handleUpdateBook
  };
}
