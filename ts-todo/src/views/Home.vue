<template>
  <div class="container">
    <nav class="navbar mb-3 navbar-light bg-light">
      <a class="navbar-brand d-flex align-items-center" href="#">
        <div class="logo mr-2"></div>
        <span>TodoList</span>
      </a>
      <ul class="nav text-left">
        <li class="nav-item">
          <router-link to="/add" class="nav-link">待办事项</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/done" class="nav-link">已完成</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/delete" class="nav-link">已删除</router-link>
        </li>
      </ul>
    </nav>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Home',
  components: {}
})
</script>
<style lang="scss" scoped>
.logo {
  background: url('~@/assets/logo.png') no-repeat center;
  background-size: contain;
  width: 30px;
  height: 30px;
}
a {
  color: rgb(68, 68, 68) !important;
  font-size: 14px;
}
.active {
  color: #007bff !important;
}
</style>
