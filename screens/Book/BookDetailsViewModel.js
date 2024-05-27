// src/screens/BookDetails/BookDetailsViewModel.js
import { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import deleteBook from '../../services/Book/deleteBook';
import fetchBookDetails from '../../services/Book/BookDetails';

export default function BookDetailsViewModel(bookId, navigation) {
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const bookDetails = await fetchBookDetails(bookId);
        setBook(bookDetails);
      } catch (error) {
        console.error('Error al obtener los detalles del libro:', error);
      }
    };

    fetchDetails();
  }, [bookId]);

  const handleUpdateBook = () => {
    navigation.navigate('UpdateBook', { bookId });
  };

  const handleDeleteBook = async () => {
    const success = await deleteBook(bookId);
    if (success) {
      navigation.goBack();
    }
  };

  const handleDeleteConfirmation = () => {
    Alert.alert(
      'Confirmar Eliminación',
      '¿Estás seguro de que deseas eliminar este libro?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Eliminar',
          onPress: handleDeleteBook,
          style: 'destructive',
        },
      ],
      { cancelable: false }
    );
  };

  return {
    book,
    handleUpdateBook,
    handleDeleteConfirmation,
  };
}
