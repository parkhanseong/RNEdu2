import axios from 'axios'

const baseUrl = 'http://noldam.co.kr:4004/api'

export const getMembers = () => {
  return axios.get(`${baseUrl}/auth/test`)
}

export const postMembers = () => {
  return axios.post(`${baseUrl}/auth/test`, data)
}
