import Vue from 'vue'
import Vuex from './myvuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    num: 0
  },
  getters: {
    //  计算属性  得到是一个值 
    getNum: (state) => {
      return state.num + 10
    }
  },
  mutations: {
    add: function(state, arg) {
      state.num += arg
    }
  },
  actions: {
    // 解构将this的作用域更改了
    // {commit} == let commit = context.commit 
    // actionAdd(context, arg) { // 执行上下文  
    //   setTimeout(() => {
    //     context.commit('add',arg) // 需要执行那个函数方法 就commit()那个方法 也可以添加额外的参数
    //   }, 1000)
    // }
    actionAdd({commit}, arg) { // 执行上下文  
      setTimeout(() => {
        commit('add',arg) // 需要执行那个函数方法 就commit()那个方法 也可以添加额外的参数
      }, 1000)
    }
  },
  modules: {
  }
})
