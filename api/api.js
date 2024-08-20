import request from '@/utils/request'

export const uploadFile = (data,config)=>{
  return request.post('/files/upload',data,config)
}
export const getReport =(data)=>{
  return request.get('/reports/get',data)
}
