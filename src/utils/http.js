import axios from "axios"

const http = axios.create({
  baseURL: "请求统一地址",
  timeout: 5000, //请求超时时间
})
// 添加请求拦截器
http.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 添加响应拦截器
http.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

export { http }
