<template>
  <ul class="list-group">
    <li class="list-group-item d-flex justify-content-space-between" v-for="(item, index) in deletes" :key="'delete-' + index">
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
      deletes: computed(() => store.state.deletes)
    })
    return toRefs(states)
  }
})
</script>

<style scoped></style>
