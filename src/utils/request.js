import axios from 'axios'

const request = axios.create({
  // TODO 1. 基础地址，超时时间
  baseURL: 'http://8.138.83.46'
})


export default request
