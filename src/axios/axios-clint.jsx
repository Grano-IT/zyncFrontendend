import axios from "axios";

const API = axios.create({
  baseURL:"https://zyncbackend.onrender.com",
  withCredentials: true, // Ensures cookies (JWT) are sent with requests
});

export default API;


