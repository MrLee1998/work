<template>
  <div class="container">
    <div class="nav">
      <div class="time">{{ localTime }}</div>
      <div class="changeCity">切换城市</div>
    </div>
    <div class="city-info">
      <p class="city"></p>
      <p class="weather"></p>
      <h2 class="temperature"><em></em></h2>
      <div class="detail"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      localTime: "",
      city: "",
    };
  },
  methods: {
    getLocalTime() {
      return new Date().toLocaleTimeString();
    },
    getLocation() {
      return new Promise((resolve, reject) => {
        AMap.plugin("AMap.CitySearch", function () {
          var citySearch = new AMap.CitySearch();
          return citySearch.getLocalCity(function (status, result) {
            if (status === "complete" && result.info === "OK") {
              // 查询成功，result即为当前所在城市信息
              resolve(result);
              reject();
            }
          });
        });
      });
    },
    getCurentCityData(city) {
      // 查询天气
      AMap.plugin("AMap.Weather", function () {
        //创建天气查询实例
        var weather = new AMap.Weather();

        //执行实时天气信息查询
        weather.getLive(city, function (err, data) {
          console.log(err, data);
          //  document.getElementById('weather').innerHTML = str.join('<br>');
          document.querySelector(".city").innerHTML = data.city;
          document.querySelector(".weather").innerHTML = data.weather;
          document.querySelector(".temperature").innerHTML =
            data.temperature + "℃";
          document.querySelector(".detail").innerHTML =
            "<span>风向：" +
            data.windDirection +
            "</span>" +
            " | " +
            "<span>风力：" +
            data.windPower +
            " 级</span>" +
            " | " +
            "<span>空气湿度：" +
            data.humidity +
            "</span>";
        });
      });
    },
  },
  created() {
    setInterval(() => {
      this.localTime = this.getLocalTime();
    }, 1000);
    this.getLocation().then((res) => {
      this.getCurentCityData(res.city);
    });
    setInterval(() => {
      this.getLocation().then((res) => {
        this.getCurentCityData(res.city);
      });
    },1000* 10 * 60);
  },
};
</script>

<style lang="less">
.app {
  text-align: center;
  .container {
    min-height: 100vh;
    background-color: #000;
    opacity: 0.7;
    color: #fff;
    .nav {
      display: flex;
      justify-content: space-between;
      padding: 10px;
    }
    .city-info {
      padding-top: 10px;
      .temperature {
        font-size: 20px;
        em {
          font-size: 34px;
          font-style: normal;
        }
      }
    }
  }
}
</style>
