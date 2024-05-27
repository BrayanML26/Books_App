// src/screens/Register/RegisterViewModel.js
import { useState } from 'react';
import { register } from '../../services/User/registerUser';

export default function RegisterViewModel(navigation) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleRegister = async () => {
    try {
      const userData = await register(email, name, password);
      console.log('Usuario registrado:', userData);
      navigation.navigate('Login');
    } catch (error) {
      console.error('Error de registro:', error);
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    name,
    setName,
    handleRegister,
  };
}
