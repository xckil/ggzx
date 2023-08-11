/**
 * Pinia 是 Vue 的专属状态管理库，它允许你跨组件或页面共享状态
 * 创建管理用户库
 */
import { defineStore } from 'pinia'
import { reqLogin } from '@/api/user'
import type { LoginFormData } from '@/api/user/type'

// 创建
const useUserStore = defineStore('User', {
  // 数据源
  state: () => ({
    token: localStorage.getItem('TOKEN'),
  }),
  // store 的计算属性
  getters: {},
  // 函数方法可异步加载
  actions: {
    //异步函数的Promise 是一个对象代表异步操作最终结果
    async userLogin(data: LoginFormData) {
      const result: any = await reqLogin(data)
      if (result.code == 200) {
        this.token = result.data.token
        // 本地持久化存储
        localStorage.setItem('TOKEN', result.data.token)
        // 保证当前async 函数返回给 promise
        return 'ok'
      } else {
        return Promise.reject(new Error(result.data.message))
      }
    },
  },
})
export default useUserStore
