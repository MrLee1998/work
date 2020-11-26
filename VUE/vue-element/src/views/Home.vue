<template>
  <div class="home">home {{$route.params.id}}
    <p>
      <router-link to="/home1">页面一 |</router-link>
      <router-link to="/home2"> 页面二</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>