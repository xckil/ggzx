/**
 * 请求接口封装
 */
import axios from 'axios'
import { ElMessage } from 'element-plus'

//创建axios实例
const request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000,
})

//请求拦截器
request.interceptors.request.use((config) => {
  return config
})

//响应拦截器
request.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    //处理错误请求
    let message = ''
    const status = error.response.status
    switch (status) {
      case 401:
        message = 'token过期'
        break
      case 403:
        message = '无权访问'
        break
      case 500:
        message = '服务器错误'
        break
      default:
        message = '无网络'
    }
    ElMessage({
      type: 'error',
      message: message,
    })
    return Promise.reject(error)
  },
)
export default request
