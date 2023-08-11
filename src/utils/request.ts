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

// const config = {
//   method: 'get',
//   url: 'http://127.0.0.1:4523/m1/3116596-0-default/admin/acl/index/login?username=<username>&password=<password>',
//   headers: {
//     'User-Agent': 'Apifox/1.0.0 (https://apifox.com)',
//   },
// }

// const request = axios.create(config)

// axios(config)
//   .then(function (response) {
//     console.log(JSON.stringify(response.data))
//   })
//   .catch(function (error) {
//     console.log(error)
//   })

//请求拦截器
request.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    console.log(config.baseURL)
    console.log(config.url)
    return config
  },
  // 对错误请求做一些什么
  (error) => {
    console.log('请求错误打印信息' + error.message)
  },
)

//响应拦截器  在请求被then或catch 处理前拦截
request.interceptors.response.use(
  (response) => {
    //超出 2xx 范围的状态码都会触发该函数
    //对响应数据做点什么
    return response.data
  },
  //对错误响应做点什么
  (error) => {
    //超出 2xx 范围的状态码都会触发该函数
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
