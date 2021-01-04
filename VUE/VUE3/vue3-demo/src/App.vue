<template>
  <!-- <h1>{{ state.count }}</h1>
  <h1>{{ double }}</h1>
  <button @click="add">+</button>
  <h2>{{ num }}</h2> -->
  <!-- <ul>
    <Fragment :data="[5, 3, 4, 1, 8, 9, 2]" />
  </ul>
  <Teleportdemo></Teleportdemo>
  <Suspense>
    <template #default>
        <AsyncComponents :timeout="3000"></AsyncComponents>
    </template>
    <template #fallback>
      <h1>
        <Loading></Loading>
      </h1>
    </template>
  </Suspense> -->
  <TodoList></TodoList>
</template>

<script>
// composition api
import { reactive, computed, ref, onMounted } from "vue";
// import Fragment from './components/Fragment'
// import Teleportdemo from './components/Teleport'
// import AsyncComponents from './components/AsyncComponent'
// import Loading from './components/Loading'
import TodoList from './components/TodoList'
export default {
  setup() {
    // 入口
    //  const state = reactive({
    //    count: 1
    //  })
    let num = ref(2);
    const { state, double } = useCount(1);
    function add() {
      state.count++;
      num.value += 10;
    }
    function reduce() {
      state.count--;
    }
    // const double = computed(() => {
    //   return state.count * 2
    // })
    onMounted(() => {
      
    });
    return {
      state,
      add,
      reduce,
      double,
      num
    };
  },
  components: {
    // Fragment,
    // Teleportdemo,
    // AsyncComponents,
    // Loading,
    TodoList
  }
};
function useCount(count) {
  const state = reactive({
    count,
  });
  const double = computed(() => {
    return state.count * 2;
  });
  return {
    state,
    double,
  };
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
