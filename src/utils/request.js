import axios from 'axios'

const request = axios.create({
  // TODO 1. 基础地址，超时时间
  baseURL: 'https://fu.oboard.eu.org'
})


export default request
