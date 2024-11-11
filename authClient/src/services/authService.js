import axios from "axios";

const API_URL = "http://localhost:4000/api/auth";

export const signup = async (userData) => {
  const response = await axios.post(`${API_URL}/signup`, userData);
  return response.data;
};

export const login = async (userData) => {
  console.log(userData)
  const response = await axios.post(`${API_URL}/login`, userData);
  return response.data;
};
