// src/screens/AddBook/AddBookScreen.js
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import useAddBookViewModel from './AddBookViewModel'; // Ajusta la ruta según la estructura del proyecto
import styles from './AddBook.style'; // Importa los estilos

const AddBookScreen = () => {
  const navigation = useNavigation();
  const { title, setTitle, author, setAuthor, description, setDescription, coverUrl, setCoverUrl, handleAddBook } = useAddBookViewModel(navigation);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Add New Book</Text>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Author"
        value={author}
        onChangeText={setAuthor}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Cover Image URL"
        value={coverUrl}
        onChangeText={setCoverUrl}
      />
      {coverUrl !== '' && <Image source={{ uri: coverUrl }} style={styles.coverImage} />}
      <TouchableOpacity style={styles.addButton} onPress={handleAddBook}>
        <Text style={styles.addButtonText}>Add Book</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddBookScreen;
