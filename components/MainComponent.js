// MainComponent.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllBooks } from '../services/Book/getAllBooks';

export default function MainComponent() {
  const dispatch = useDispatch();
  const allBooks = useSelector((state) => state.books.allBooks);

  useEffect(() => {
    const fetchBooks = async () => {
      const books = await getAllBooks();
      dispatch({ type: 'SET_ALL_BOOKS', payload: books });
    };
    fetchBooks();
  }, [dispatch]);

  return (
    <div>
      {/* Renderizar componentes con datos de allBooks */}
    </div>
  );
}
