<template>
  <div class="hi">
    <p @click="hiSend">{{hi}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      hi: 'hi 你好',
      hiMsg: '我是HI组建的数据'
    }
  },
  methods: {
    hiSend () {
      this.$emit('hiSend', this.hiMsg)
    }
  }
}
</script>

<style>

</style>