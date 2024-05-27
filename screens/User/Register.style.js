// src/screens/Register/Register.styles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#f1f1f1',
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 70,
    color: '#34434D',
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 16,
    color: 'gray',
  },
  textInput: {
    padding: 10,
    paddingStart: 30,
    width: '80%',
    height: 50,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: '#fff',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#2a4d69',
    padding: 15,
    borderRadius: 25,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
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
