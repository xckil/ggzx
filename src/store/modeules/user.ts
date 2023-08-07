/**
 * 创建用户相关的小仓库
 */
import { defineStore } from 'pinia'

const userStore = defineStore('User', {
  state: () => {
    return {
      token: localStorage.getItem('TOKEN'),
    }
  },
  actions: {
    async userlogin(data: loginForm) {
      const result: any = await reqLogin(data)
    }
  },
  getters: {},
})
export default userStore
