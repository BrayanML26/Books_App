import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  mainContainer: {
    backgroundColor: '#f1f1f1',
    flex: 1,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerSVG: {
    width: width,
    justifyContent: 'flex-start',
    alignItems: 'center',
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
  forgotPassword: {
    fontSize: 14,
    color: 'gray',
    marginTop: 20,
  },
  registerLink: {
    fontSize: 14,
    color: '#2a4d69',
    marginTop: 20,
    textDecorationLine: 'underline',
  },
});
