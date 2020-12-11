import axios from '../api.js'

const login = (data) => {
  return axios({
    url: '/login',
    method: 'post',
    data
  })
}

export default {
  login
}