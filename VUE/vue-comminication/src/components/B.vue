<template>
  <div class="B">
    我是B
  <p>{{dataA}}</p>
  </div>
  
</template>

<script>
import Bus from "@/bus/index.js"
export default {
  data() {
    return {
      dataA: ''
    }
  },
  mounted () {
    Bus.$on('sendA', (res) => {
      console.log(res);
      this.dataA = res
    })
  }
}
</script>

<style>
</style>