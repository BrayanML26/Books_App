// HomeScreen.js
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import useHomeViewModel from './HomeViewModel'; // Ajusta la ruta según la estructura del proyecto
import styles from './Home.styles'; // Importa los estilos

export default function HomeScreen() {
  const navigation = useNavigation();
  const { searchQuery, setSearchQuery, books, numColumns } = useHomeViewModel(navigation);

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
        <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddBook')}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        key={numColumns}
        data={books}
        numColumns={numColumns}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.bookContainer} onPress={() => navigation.navigate('BookDetails', { bookId: item.bookId })}>
            <Image source={{ uri: item.cover }} style={styles.coverImage} />
            <Text style={styles.bookTitle}>{item.title}</Text>
            <Text style={styles.bookAuthor}>{item.author}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.bookId.toString()}
      />
    </View>
  );
}
