// src/screens/Register/RegisterScreen.js
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import useRegisterViewModel from './RegisterViewModel'; // Ajusta la ruta según la estructura del proyecto
import styles from './Register.style'; // Importa los estilos

export default function RegisterScreen() {
  const navigation = useNavigation();
  const { email, setEmail, password, setPassword, name, setName, handleRegister } = useRegisterViewModel(navigation);

  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.titulo}>Register</Text>
        <Text style={styles.subTitle}>Create a new account</Text>
        <TextInput
          placeholder="Name"
          style={styles.textInput}
          onChangeText={setName}
          value={name}
        />
        <TextInput
          placeholder="Email"
          style={styles.textInput}
          onChangeText={setEmail}
          value={email}
        />
        <TextInput
          placeholder="Password"
          style={styles.textInput}
          secureTextEntry={true}
          onChangeText={setPassword}
          value={password}
        />
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}
