import { springAPI } from "./axiosConfig";

export const getUsers = async () => {
  return await springAPI.get("/users");
};

export const getUserById = async (id) => {
  return await springAPI.get(`/users/${id}`);
};

export const addUser = async (data) => {
  return await springAPI.post("/users", data);
};

export const updateUser = async (id, data) => {
  return await springAPI.put(`/users/${id}`, data);
};

export const deleteUser = async (id) => {
  return await springAPI.delete(`/users/${id}`);
};