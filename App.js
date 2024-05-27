import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import LoginScreen from './screens/Login/LoginScreen';
import RegisterScreen from './screens/User/RegisterScreen';
import HomeScreen from './screens/Home/HomeScreen';
import AddBookScreen from './screens/Book/AddBookScreen';
import BookDetailsScreen from './screens/Book/BookDetailsScreen';
import UpdateBookScreen from './screens/Book/UpdateBookScreen';

const Stack = createStackNavigator();
const store = configureStore({ reducer: rootReducer });

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="AddBook" component={AddBookScreen} />
          <Stack.Screen name="BookDetails" component={BookDetailsScreen} />
          <Stack.Screen name="UpdateBook" component={UpdateBookScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
