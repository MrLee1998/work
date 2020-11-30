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
    <div class="map_container" ref="mapContainer"></div>
    <div class="future" v-if="futureData.length > 0">
      <div class="group">
        明天:
        <span class="tm"
          >白天: {{ futureData[0].dayTemp }} {{ futureData[0].dayWeather }}
          {{ futureData[0].dayWindDir }} {{ futureData[0].dayWindPower }}</span
        >
        <span class="tm"
          >夜间: {{ futureData[0].nightTemp }} {{ futureData[0].nightWeather }}
          {{ futureData[0].nightWindDir }}
          {{ futureData[0].nightWindPower }}</span
        >
      </div>
      <div class="group">
        明天:
        <span class="tm"
          >白天: {{ futureData[1].dayTemp }} {{ futureData[1].dayWeather }}
          {{ futureData[1].dayWindDir }} {{ futureData[1].dayWindPower }}</span
        >
        <span class="tm"
          >夜间: {{ futureData[1].nightTemp }} {{ futureData[1].nightWeather }}
          {{ futureData[1].nightWindDir }}
          {{ futureData[1].nightWindPower }}</span
        >
      </div>
    </div>
    <div class="echarts" ref="echartContainer"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      localTime: "",
      city: "",
      futureData: [],
      seriesData: [],
    };
  },
  methods: {
    getLocalTime() {
      return new Date().toLocaleTimeString();
    },
    initMap() {
      let _this = this;
      var map = new AMap.Map(_this.$refs.mapContainer, {
        resizeEnable: true,
      });
      console.log(map);
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
      //       AMap.plugin('AMap.Geolocation', function() {
      //   var geolocation = new AMap.Geolocation({
      //     // 是否使用高精度定位，默认：true
      //     enableHighAccuracy: true,
      //     // 设置定位超时时间，默认：无穷大
      //     timeout: 10000,
      //     // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
      //     buttonOffset: new AMap.Pixel(10, 20),
      //     //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
      //     zoomToAccuracy: true,
      //     //  定位按钮的排放位置,  RB表示右下
      //     buttonPosition: 'RB'
      //   })

      //   geolocation.getCurrentPosition()
      //   AMap.event.addListener(geolocation, 'complete', onComplete)
      //   AMap.event.addListener(geolocation, 'error', onError)

      //   function onComplete (data) {
      //     // data是具体的定位信息
      //     console.log(data)
      //   }

      //   function onError (data) {
      //     console.log(data)
      //     // 定位出错
      //   }
      // })
    },
    getCurentCityData(city) {
      // 查询天气
      let _this = this;
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
        weather.getForecast(city, function (err, data) {
          console.log(err, data);
          _this.futureData = data.forecasts;
          _this.futureData.map((item) => {
            _this.seriesData.push(item.dayTemp);
          });
          _this.initEcharts();
        });
      });
    },
    initEcharts() {
      let dom = this.$refs.echartContainer;
      var myChart = echarts.init(dom);
      let option = null;
      option = {
        xAxis: {
          type: "category",
          data: ["今天", "明天", "后天", "三天后"],
          axisLine: {
            lineStyle: {
              color: "#fff",
            },
          },
          axisTick: {
            show: false,
          },
        },
        yAxis: {
          show: false,
          type: "value",
        },
        tooltip: {
          trigger: "axis",
          formatter: function (params) {
            var relVal = params[0].name;
            for (var i = 0, l = params.length; i < l; i++) {
              relVal += params[i].value + "°C";
            }
            return relVal;
          },
        },
        series: [
          {
            data: this.seriesData,
            type: "line",
          },
        ],
      };

      myChart.setOption(option);
    },
  },
  created() {},
  mounted: function () {
    this.initMap();
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
    }, 1000 * 10 * 60);
  },
};
</script>

<style lang="less">
.app {
  .container {
    min-height: 100vh;
    background-color: #000;
    opacity: 0.7;
    color: #fff;
    .nav {
      display: flex;
      justify-content: space-between;
      padding: 10px;
      text-align: center;
    }
    .city-info {
      padding-top: 10px;
      text-align: center;
      .temperature {
        font-size: 20px;
        em {
          font-size: 34px;
          font-style: normal;
        }
      }
    }
    .future {
      margin-top: 30px;
      padding: 0 10px;
      .group {
        height: 44px;
        line-height: 44px;
        border-radius: 4px;
        background-color: rgba(255, 255, 255, 0.3);
        color: rgba(16, 16, 16, 1);
        font-size: 16px;
        margin-bottom: 10px;
        padding-left: 10px;
      }
    }
    .echarts {
      width: 100%;
      height: 50vh;
    }
  }
}
// .map_container {
//   height: 300px;
// }
</style>
