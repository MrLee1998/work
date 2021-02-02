import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 1,
  todos: [
    { id: 1, text: '...', done: true },
    { id: 2, text: '...', done: false }
  ]
}

const mutations = {
  increase(state, n) {
    state.count += n
  },
  reduce(state, n) {
    state.count -= n
    console.log('wait');
  }
}

const getters = {
  newCount: (state) => {
    return state.count ** 2
  }
}

const actions = {
  addAction (context, num) {
    setTimeout(() => {
      context.commit('reduce', num)
    },2000)
    console.log('hello');
  }
}

const moduleA = {
  state: state,
  mutations: mutations,
  getters: getters,
  actions: actions
}
const state2 = {
  name: 'lz'
}
const moduleB = {
  state: state2
}
export default new Vuex.Store({
  
  modules: {
    a: moduleA,
    b: moduleB
  }
})