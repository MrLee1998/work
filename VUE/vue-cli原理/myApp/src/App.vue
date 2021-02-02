<template>
  <div id="id">
    <div>这是vue 的根目录</div>
    <router-link to="/login">登录</router-link>
    <router-link to="/">首页</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'app'
}
</script>
<style scoped>

</style>