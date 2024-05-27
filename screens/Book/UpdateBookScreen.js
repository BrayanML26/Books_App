// src/screens/UpdateBook/UpdateBookScreen.js
import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import useUpdateBookViewModel from './UpdateBookViewModel';
import styles from './UpdateBook.style';

export default function UpdateBookScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { bookId } = route.params;
  const {
    title, setTitle,
    author, setAuthor,
    description, setDescription,
    coverUrl, setCoverUrl,
    handleUpdateBook
  } = useUpdateBookViewModel(bookId, navigation);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Update Book</Text>
      <Text style={styles.subTitle}>Title</Text>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <Text style={styles.subTitle}>Author</Text>
      <TextInput
        style={styles.input}
        placeholder="Author"
        value={author}
        onChangeText={setAuthor}
      />
      <Text style={styles.subTitle}>Description</Text>
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <Text style={styles.subTitle}>Cover URL</Text>
      <TextInput
        style={styles.input}
        placeholder="Cover URL"
        value={coverUrl}
        onChangeText={setCoverUrl}
      />
      <TouchableOpacity style={styles.updateButton} onPress={handleUpdateBook}>
        <Text style={styles.buttonText}>Update</Text>
      </TouchableOpacity>
    </View>
  );
}
