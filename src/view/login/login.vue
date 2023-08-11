<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12"></el-col>
      <el-col :span="12">
        <el-form :model="loginForm" class="login_form" label-position="right">
          <el-form-item>
            <h1>欢迎来到妙妙屋</h1>
          </el-form-item>
          <el-form-item label="账号" class="label">
            <el-input
              placeholder="请输入账号"
              :prefix-icon="User"
              v-model="loginForm.username"
            ></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input
              placeholder="请输入密码"
              :prefix-icon="Lock"
              v-model="loginForm.password"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              :loading="loading"
              size="default"
              @click="login"
            >
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { User, Lock } from '@element-plus/icons-vue'
import useUserStore from '@/store/modeules/user'
import { useRouter, useRoute } from 'vue-router'
import { ElNotification } from 'element-plus'
import { getTime } from '@/utils/time'

let loginForm = reactive({ username: 'admin', password: '123456' })

const loading = ref(false)
const userStore = useUserStore()
const $route = useRoute()
const $router = useRouter()

const login = async () => {
  loading.value = true

  /**
   * 登录流程  按钮事件 -> store 发起请求 -> 请求成功 -> 路由跳转
   */
  try {
    await userStore.userLogin(loginForm)
    let redirect: string = $route.query.redirect as string
    $router.push({ path: redirect || '/' })
    $router.push('/')
    ElNotification({
      type: 'success',
      message: '登录成功',
      title: `Hi,现在是 ${getTime}`,
    })
    //还原按钮状态
    loading.value = false
  } catch (error) {
    loading.value = false
    ElNotification({
      type: 'error',
      message: (error as Error).message,
    })
  }
}
</script>

<style scoped>
.login_container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/img/montrone.jpg') no-repeat;
  background-size: cover;
}

.login_form {
  position: relative;
  top: 30vh;
  width: 50%;
  background: url('@/assets/img/login_form.png') no-repeat;
  background-size: cover;
  padding: 10%;
}

h1 {
  color: #b3e19d;
  font-size: 40px;
}
</style>
