// authService.js
import apiClient from '../Config/apiConfig';

export const login = async (email, password) => {
  try {
    const response = await apiClient.post('/user/login', { email, password });
    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      throw error.response.data;
    } else {
      throw new Error('Error en la solicitud de login');
    }
  }
};

