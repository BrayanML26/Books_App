import apiClient from '../Config/apiConfig';

export const register = async (email, name, password) => {
    try {
      const response = await apiClient.post('/user', { email, name, password });
      return response.data;
    } catch (error) {
      if (error.response && error.response.data) {
        throw error.response.data;
      } else {
        throw new Error('Error en la solicitud de registro');
      }
    }
  };