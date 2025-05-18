import axios from 'axios'

const API = axios.create({
  baseURL: 'http://192.168.43.254:5000/api', // replace with your actual local IP
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
})

export default API


