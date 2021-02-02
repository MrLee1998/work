<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <Hello :message="title" :hiNew="hiNew" @sendData='getData'/>
    {{news}}{{hiNew}}
    <Hi @hiSend='getHi'/> -->
    <A/>
    <B/>
  </div>
</template>

<script>
// import Hello from '@/components/Hello.vue'
// import Hi from '@/components/Hi.vue'
import A from '@/components/A.vue'
import B from '@/components/B.vue'
export default {
  name: 'App',
  components: {
    // Hello,
    // Hi
    A,
    B
  },
  data () {
    return {
      title: '我爱我的祖国',
      news: '',
      hiNew: ''
    }
  },
  methods: {
    getData (e) {
      console.log(e);
      this.news = e
    },
    getHi (res) {
      console.log(res);
      this.hiNew = res
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
