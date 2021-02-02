<template>
  <div class="A">
    我是A
    <button @click="sendA">A</button>
  </div>
</template>

<script>
import Bus from '@/bus/index.js'
export default {
  data () {
      return {
        item: '我是组建A里的数据'
      }
  },
  methods: {
    sendA () {
      Bus.$emit('sendA', this.item)
    }
  }
}
</script>

<style>

</style>