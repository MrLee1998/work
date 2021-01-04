<template>
  <div class="container">
    <button @click="isOpen = true">open</button>
    <teleport to='#foot-container'>
      <div v-if="isOpen">
      <p>hahha</p>
      <button @click="isOpen = false">close</button>
    </div>
    </teleport>
  </div>
</template>

<script>
import {ref} from 'vue'
export default {
  setup() {
    const isOpen = ref(false)
    return {
      isOpen
    }
  }
};
</script>

<style lang="">
</style>