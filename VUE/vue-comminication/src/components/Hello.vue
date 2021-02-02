<template>
  <div class="hello">
   {{message}}
   <hr>
   <button @click="send">按钮</button>
  </div>
</template>

<script>
export default {
  props: ['message', 'hiNew'],
  data () {
    return {
      msg: ' 我是子组件的数据 '
    }
  },
  methods: {
    send () {
      this.$emit('sendData', this.msg)
    }
  }
}
</script>
<style>
  .hello {
    font-size: 20px;
    color: red;
    /* width: 100px; */
    /* height: 50px; */
    /* border: 2px dotted pink; */
  }
</style>