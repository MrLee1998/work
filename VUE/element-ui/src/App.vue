<template>
  <div class="content">
    <router-view></router-view>
    <verifyCode></verifyCode>
  </div>
</template>

<script>
import verifyCode from 'lz-verify-code'
export default {
  components: {
    verifyCode
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
</style>