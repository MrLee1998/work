<template>
  <section class="todoapp">
    <header class="header">
      <h1>vue3 todos</h1>
      <input type="text" class="new-todo" placeholder="想干的事" @keyup.enter="handleSubmit" v-model="newTodo">
    </header>
    <section class="main">
      <ul class="todo-list">
        <li class="todo" v-for="(item,index) in todos" :key="item.id" :class="{completed: item.completed === true}">
          <div class="view">
            <input type="checkbox" class="toggle" v-model="item.completed"/>
            <label>{{item.title}}</label>
            <button class="destroy" @click="close(index)"></button>
          </div>
        </li>
      </ul>
    </section>
    <div class="footer">
      <span class="todo-count">
        <strong>{{remaining}}</strong> left
      </span>
      <button class="clear-completed" @click="removeCompleted">clear Btn</button>
    </div>
  </section>
</template>

<script>
import { reactive, toRefs, computed } from 'vue'
export default {
  setup() {
    let todo =reactive({
      newTodo: '',
      todos: [],
      hasCompleted: []
    })
    let remaining = computed(() => todo.todos.filter(thing => !thing.completed).length)
    function handleSubmit() {
      let value = todo.newTodo && todo.newTodo.trim()
      if(todo.newTodo !== '') {
        todo.todos.push({
          id: todo.todos.length,
          title: value,
          completed: false
          })
        console.log(todo.todos);
        todo.newTodo=''
      }
    }
    function close(index) {
      todo.todos.splice(index,1)
    }
    function removeCompleted() {
      for(let i in todo.todos) {
        if(todo.todos[i].completed == false) {
          todo.hasCompleted.push(todo.todos[i])
        }
      }
      todo.todos = todo.hasCompleted
      todo.hasCompleted = []
      // todo.hasCompleted = todo.todos.filter(thing => thing.completed === false)
      // todo.todos = todo.todos.filter(thing => thing.completed === false)
     
    }
    return {
      ...toRefs(todo),
      handleSubmit,
      close,
      remaining,
      removeCompleted
    }
    
  }
}
</script>

<style>
.header.fixed{
  background: #fff;
  position: fixed;
  top:0;
  left:0;
  right:0;
  width:100%;
  z-index:100;
}

</style>