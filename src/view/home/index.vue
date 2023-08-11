<template>
  <h1>主页面导航测试</h1>
  <h2>{{ message }}</h2>
  <h2>{{ prtte() }}</h2>
  <h2>{{ count }}</h2>
  <el-button type="primary"></el-button>
</template>
<script lang="ts">
import { ref } from 'vue'

export default {
  setup() {
    const message = ref('message')
    const ss1 = ref(5)
    const ss2 = ref(16)
    console.log(this)
    return {
      message,
      ss1,
      ss2,
    }
  },
  // methods 属性
  methods: {
    prtte() {
      console.log('调用method')
      return `method: ${this.ss1 + this.ss2}`
    },
  },
  //计算属性
  computed: {
    count() {
      return `computed: ${this.ss1 + this.ss2}`
    },
  },
  //侦听器
  watch: {
    ss1(newValue, oldValue) {
      console.log('----ss1-----')
      console.log(newValue, oldValue)
    },
    ss2(newValue, oldValue) {
      console.log('----ss2-----')
      console.log(newValue, oldValue)
    },
    message(newvalue, oldvalue) {
      console.log('------message-------')
      console.log(newvalue, oldvalue)
    },
  },
}
</script>
