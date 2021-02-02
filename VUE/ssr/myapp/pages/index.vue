<template>
  <div class="container">
    <ul>
      <li><nuxt-link to="{name: 'index'}">home</nuxt-link></li>
      <li><nuxt-link to="{name: 'about'}">about</nuxt-link></li>
      <li><nuxt-link to="{name: 'news', params: {newsId: 1}}">news</nuxt-link></li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>
