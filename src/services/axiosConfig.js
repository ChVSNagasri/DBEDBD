import axios from "axios";

// Spring Boot API
export const springAPI = axios.create({
  baseURL: "http://localhost:9090/api",
});

// Node.js API
export const nodeAPI = axios.create({
  baseURL: "http://localhost:5000/api",
});

// Add JWT token automatically to Spring Boot requests
springAPI.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// Optional: Add JWT to Node.js requests too
nodeAPI.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);