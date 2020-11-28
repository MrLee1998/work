<template>
  <div class="home">
    <p>num: {{num}}</p>
    <p>
      <button @click="add">add</button>
    </p>
  </div>
</template>

<script>
import { addLog, app } from './home.js'
export default {
  data () {
    return {
      num: 1
    }
  },
  created () {
    console.log('我是亲生的')
  },
  updated () {
    console.log('原生数据变化了')
  },
  mixins: [addLog], // 代码混入
  extends: app, // 扩展
  methods: {
    add () {
      this.num++
      console.log(this.num)
    }
  }
}
</script>

<style>

</style>
