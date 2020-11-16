<template>
  <ul class="list-group">
    <li class="list-group-item d-flex justify-content-space-between" v-for="(item, index) in dones" :key="'done-' + index">
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">{{ item }}</label>
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, toRefs } from 'vue'
import store from '@/store'

export default defineComponent({
  setup() {
    const states = reactive({
      dones: computed(() => store.state.dones)
    })
    return toRefs(states)
  }
})
</script>

<style scoped></style>
