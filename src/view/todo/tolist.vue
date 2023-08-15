<template>
  <section class="todoapp">
    <!--添加事项-->
    <header class="header">
      <h1>todos</h1>
      <input
        @keyup.enter="handlekeydown"
        v-model="tg"
        class="new-todo"
        placeholder="接下来该做什么"
        autofocus
        type="text"
      />
    </header>
    <!-- 代办事项 -->
    <section class="main">
      <input
        id="toggle-all"
        class="toggle-all"
        type="checkbox"
        @click="setalltask"
      />
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        <li
          v-for="item in filteroption"
          :key="item.id"
          :class="{ completed: item.completed }"
        >
          <div class="view">
            <input
              type="checkbox"
              class="toggle"
              @change="completedtask(item)"
              :checked="item.completed"
            />
            <label>{{ item.content }}</label>
            <button class="destroy" @click="deletetask"></button>
          </div>
          <input class="edit" />
        </li>
      </ul>
    </section>
    <!-- 选择显示 -->
    <footer class="footer">
      <!-- This should be `0 items left` by default -->
      <span class="todo-count">
        <strong>{{ count }}</strong>
        item left
      </span>
      <!-- Remove this if you don't implement routing -->
      <ul class="filters">
        <li>
          <a class="selected" href="#/all">All</a>
        </li>
        <li>
          <a href="#/active">Active</a>
        </li>
        <li>
          <a href="#/completed">Completed</a>
        </li>
      </ul>
      <!-- Hidden if no completed items are left ↓ -->
      <button class="clear-completed">Clear completed</button>
    </footer>
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

const todos = ref([
  {
    id: 1,
    content: '测试加载内容',
    completed: false,
  },
  {
    id: 2,
    content: '测试加载内容2',
    completed: true,
  },
])

const tg = ref('')

const visiably = ref('all')

const count = computed(
  () => todos.value.filter((item) => !item.completed).length,
)

const filteroption = computed(() => {
  if (visiably.value == 'all') return todos.value
  else if (visiably.value == 'active')
    return todos.value.filter((item) => !item.completed)
  else return todos.value.filter((item) => item.completed)
})

function OnHashChange() {
  const hash = window.location.hash.replace('/#\/?', '')
  if (['all', 'active', 'completed'].includes(hash)) {
    visiably.value = hash
  } else {
    window.location.hash = ''
    visiably.value = 'all'
  }
}

onMounted(() => {
  console.log('onmounted正在执行')
  OnHashChange()
})

//监听键盘事件
function handlekeydown() {
  if (tg.value == '') return

  let kk = {
    id: Math.random() * 81 + 20,
    content: tg.value,
    completed: false,
  }
  todos.value.push(kk)
  tg.value = ''
}

// 完成任务
function completedtask(item: any) {
  item.completed = !item.completed
}

//删除任务
function deletetask(event: any) {
  console.log(event.target)
  todos.value.splice(event.target.key, 1)
}

// 设置所有的任务
function setalltask(event: any) {
  todos.value.forEach((element) => {
    element.completed = event.target.checked
  })
}
</script>

<style src="@/styles/tolist.css"></style>
