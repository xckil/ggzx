<template>
    <div>
        <h1> 测试全局注册组件</h1>
    </div>
</template>

<script setup lang="ts">
defineProps({
  pro1:{
    type: String,
    default: '第一个属性',
  },
  pro2: {
    type: String,
    default: '第二个属性',
  },
  pro3: {
    type: String,
    default: '第三个属性',
  }
})
</script>

<style scoped>
</style>