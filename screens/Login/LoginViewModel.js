import { useState } from 'react';
import { login } from '../../services/Auth/authService';

export default function useLoginViewModel(navigation) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await login(email, password);
      navigation.navigate('Home');
    } catch (error) {
      if (error.message === 'Invalid credentials') {
        alert('Usuario o contraseña incorrectos. Por favor, inténtelo de nuevo.');
      } else {
        alert('Se produjo un error al intentar iniciar sesión. Por favor, inténtelo de nuevo más tarde.');
      }
    }
  };

  return { email, setEmail, password, setPassword, handleLogin };
}
