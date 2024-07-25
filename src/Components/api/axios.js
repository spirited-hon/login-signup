import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://35.95.212.85",
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
