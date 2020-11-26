<template>
  <div class="page">
    <!-- <router-view></router-view> -->
    <p>
      <router-link to="/">首页|</router-link>
      <router-link to="/About">关于</router-link>
    </p>
    <!-- 路由入口 -->
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
};
</script>

<style>
.page {
  text-align: center;
}
p {
  text-align: center;
}
.fade-enter-active {
  transition: opacity 3s;
}
.fade-leave-active {
  opacity: 0;
  /* transition: opacity 0.5s; */
}
.fade-enter {
  opacity: 0;
}
.fade-leave {
  opacity: 1;
}
</style>