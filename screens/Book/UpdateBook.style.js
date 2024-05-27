// src/screens/UpdateBook/UpdateBook.styles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
  },
  title: {
    fontSize: 38,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#34434D',
  },
  subTitle: {
    fontSize: 16,
    color: 'gray',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  updateButton: {
    backgroundColor: '#2a4d69',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
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
});

export default styles;
