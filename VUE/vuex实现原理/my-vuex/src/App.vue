<template>
  <div id="app">
    {{this.$store.state.num}}
    {{this.$store.getters.getNum}}
    <button @click="add">++</button>
    <button @click="asyncAdd">++</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {

    }
   },
  methods: {
    add() {
      this.$store.commit('add', 1)
    },
    asyncAdd() {
      this.$store.dispatch('actionAdd', 2)
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
