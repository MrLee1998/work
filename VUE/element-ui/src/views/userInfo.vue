<template>
  <div class="user-info">
    啥也不会{{ value }}
    {{ totalPrice }}
    <ul>
        <li v-for="(item,index) in fun" :key="index">{{item.title}}    时间:{{item.date}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 2,
      price: 100,
      news: [
        { title: '"空降"不到一周 韩俊任吉林代省长 曾是刘鹤"副手"' ,date: "2020/11/17"},
        { title: "上门女婿成村霸，敲诈勒索故意纵火还打伤司法人员" ,date: "2020/11/18"},
        { title: "X光显示肚子内有异物 港媒:黄之锋被关医院单人囚室" ,date: "2020/11/19"},
        { title: "特朗普突然出手，举行了史上最短一次记者会！" ,date: "2020/11/20"},
      ],
    };
  },
  methods: {},
  computed: {
    value() {
      return this.num ** 3;
    },
    totalPrice() {
      return this.num * this.price;
    },
    fun() {
        let news = this.news
        return news.reverse();
    }
  },
};
</script>

<style>
li {
    list-style: none;
}
</style>