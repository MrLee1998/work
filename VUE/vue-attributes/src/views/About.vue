<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>当前温度: {{ temperature.num }}</p>
    <p>推荐穿衣：{{ suggest }}</p>
    <div>
      <button @click="add">+</button>
      <button @click="reduce">-</button>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      count: 0,
      temperature: {
        num: 9
      },
      suggest: ''
    }
  },
  computed: {
    addFun () {
      return (this.count + 10) ** 2
    }
    // suggest () {
    //   if (this.temperature <= -1) {
    //     return '羽绒服'
    //   } else if (this.temperature <= 14) {
    //     return '棉服'
    //   } else if (this.temperature <= 24) {
    //     return '夹克'
    //   } else {
    //     return '短袖'
    //   }
    // }
  },
  methods: {
    add () {
      this.temperature.num += 5
    },
    reduce () {
      this.temperature.num -= 5
    }
  },
  watch: {
    // temperature (newVal, oldVal) {
    //   immediate: true
    //   if (newVal < -1) {
    //     this.suggest = '羽绒服'
    //   } else if (newVal < 14) {
    //     this.suggest = '棉袄'
    //   } else if (newVal < 24) {
    //     this.suggest = '夹克'
    //   } else {
    //     this.suggest = '裙子'
    //   }
    // }
    temperature: {
      immediate: true,
      deep: true,
      handler (newVal, oldVal) {
        if (newVal.num < -1) {
          this.suggest = '羽绒服'
        } else if (newVal.num < 14) {
          this.suggest = '棉袄'
        } else if (newVal.num < 24) {
          this.suggest = '夹克'
        } else {
          this.suggest = '裙子'
        }
      }
    }
  }
}
</script>

<style>
</style>
