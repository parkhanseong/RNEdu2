import axios from 'axios'

const baseUrl = 'http://noldamapp.com:5000/account'

export const getVerifyNum = phone => {
  return axios.post(`${baseUrl}/verify`, phone)
}
export const postRegister = data => {
  return axios.post(`${baseUrl}`, data)
}
