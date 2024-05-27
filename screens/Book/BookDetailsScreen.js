// src/screens/BookDetails/BookDetailsScreen.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import useBookDetailsViewModel from './BookDetailsViewModel';
import styles from './BookDetails.style';

const BookDetailsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { bookId } = route.params;
  const { book, handleUpdateBook, handleDeleteConfirmation } = useBookDetailsViewModel(bookId, navigation);

  if (!book) {
    return (
      <View style={styles.container}>
        <Text>Cargando detalles del libro...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
      <Image source={{ uri: book.cover }} style={styles.coverImage} />
      <Text style={styles.title}>{book.title}</Text>
      <Text style={styles.author}>By {book.author}</Text>
      <Text style={styles.description}>{book.description}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.updateButton]} onPress={handleUpdateBook}>
          <Text style={styles.buttonText}>Update</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.deleteButton]} onPress={handleDeleteConfirmation}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BookDetailsScreen;
