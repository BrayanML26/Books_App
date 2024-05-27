// src/screens/BookDetails/BookDetails.styles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  coverImage: {
    width: 200,
    height: 300,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  author: {
    fontSize: 18,
    color: '#666666',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
  },
  backButtonText: {
    fontSize: 16,
    color: '#2a4d69',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  updateButton: {
    backgroundColor: '#2a4d69',
  },
  deleteButton: {
    backgroundColor: '#d90429',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
  },
});

export default styles;
