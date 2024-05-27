// HomeViewModel.js
import { useState, useEffect } from 'react';
import { getAllBooks } from '../../services/Book/getAllBooks';

export default function HomeViewModel(navigation) {
  const [searchQuery, setSearchQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [numColumns, setNumColumns] = useState(2);

  useEffect(() => {
    const loadBooks = async () => {
      try {
        const data = await getAllBooks();
        setBooks(data);
      } catch (error) {
        console.error('Error al obtener los libros:', error);
      }
    };

    loadBooks();
  }, []);

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return {
    searchQuery,
    setSearchQuery,
    books: filteredBooks,
    numColumns,
    navigation,
  };
}
