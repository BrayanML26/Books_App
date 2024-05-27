// Home.styles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 50,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 15,
    marginRight: 10,
  },
  addButton: {
    width: 40,
    height: 40,
    backgroundColor: '#2a4d69',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: '#ffffff',
    fontSize: 20,
  },
  bookContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  coverImage: {
    width: 150,
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  bookTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bookAuthor: {
    fontSize: 12,
    color: '#666666',
    textAlign: 'center',
  },
});

export default styles;
