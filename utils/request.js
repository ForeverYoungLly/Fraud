import axios from 'axios'

const request = axios.create({
  // TODO 1. 基础地址，超时时间
  baseURL: 'http://127.0.0.1:5000'
})


export default request
