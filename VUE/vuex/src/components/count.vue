<template>
  <div class="count">
    <div>
      <h3>{{$store.state.a.count}}</h3>
      <h3>{{count}}</h3>
      <h1>{{newCount}}</h1>
      <button @click="increase(num)">+</button>
      <button @click="addAction(num)">-</button>
      <h3>{{$store.state.a.todos[1].done}}</h3>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'

export default {
  // computed: {
  //   newCount() {
  //     return this.$store.state.count * 2
  //   }
  // }
  data () {
    return {
      msg: '',
      num: 5
    }
  },
  computed: {
    ...mapState(['count']),
    ...mapGetters(['newCount'])
  },
  methods: {
    ...mapMutations(['increase']),
    ...mapActions(['addAction'])
  }
}
</script>

<style>

</style>