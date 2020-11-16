<template>
  <div class="form-group">
    <label for="exampleInputEmail1">添加待办事项</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="inputValue" @keydown.enter="add(inputValue)" />
    <small id="emailHelp" class="form-text text-muted">回车即可添加</small>
  </div>
  <ul class="list-group">
    <li class="list-group-item " v-for="(item, index) in todos" :key="'todo-' + index">
      <div class="form-check float-left">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" @click.prevent="check(index)" />
        <!-- 如果不用 prevent 则 会给下一个元素添加 对勾 造成错觉 -->
        <label class="form-check-label" for="exampleCheck1">{{ item }}</label>
      </div>
      <div class="float-right">
        <button class="btn btn-sm btn-danger" @click="del(index)">删除</button>
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref, toRefs } from 'vue'
import store from '@/store'

export default defineComponent({
  setup() {
    const inputValue = ref('')
    const add = (value: string) => {
      if (value.trim() === '') return
      store.commit('add', value)
      inputValue.value = ''
    }
    const del = (index: number) => {
      store.commit('delete', index)
    }
    const check = (index: number) => {
      store.commit('check', index)
    }
    const states = reactive({
      inputValue,
      todos: computed(() => store.state.todos),
      add,
      del,
      check
    })

    return toRefs(states)
  }
})
</script>

<style scoped></style>
