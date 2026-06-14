import API from './axiosConfig'

export const issueBook = async (data) => {
  return await API.post('/issues/', data)
}

export const returnBook = async (
  issueId
) => {
  return await API.put(
    `/issues/return/${issueId}`
  )
}

export const getIssuedBooks = async () => {
  return await API.get('/issues/')
}

export const getStudentHistory =
  async (studentId) => {
    return await API.get(
      `/issues/student/${studentId}`
    )
  }

export const getOverdueBooks =
  async () => {
    return await API.get(
      '/issues/overdue'
    )
  }