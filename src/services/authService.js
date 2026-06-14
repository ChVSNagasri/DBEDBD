import API from './axiosConfig'

export const registerUser = async (data) => {
  return await API.post('/auth/register', data)
}

export const loginUser = async (data) => {
  return await API.post('/auth/login', data)
}

export const forgotPassword = async (email) => {
  return await API.post('/auth/forgot-password', {
    email
  })
}

export const logoutUser = () => {
  localStorage.removeItem('token')
}