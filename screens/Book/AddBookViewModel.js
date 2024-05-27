// src/screens/AddBook/AddBookViewModel.js
import { useState } from 'react';
import { addBook } from '../../services/Book/addBook';

export default function AddBookViewModel(navigation) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [coverUrl, setCoverUrl] = useState('');

  const handleAddBook = async () => {
    const bookData = { title, author, description, cover: coverUrl };
    const success = await addBook(bookData);
    if (success) {
      navigation.goBack();
    }
  };

  return {
    title,
    setTitle,
    author,
    setAuthor,
    description,
    setDescription,
    coverUrl,
    setCoverUrl,
    handleAddBook,
  };
}
