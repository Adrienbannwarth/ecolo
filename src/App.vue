<template>
  <div id="app">
    <h1>zéro déchet</h1>
    <nav>

    </nav>
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide>
        <div class="content">
          <div class="col-6">
            <canvas id="planet-chart"></canvas>
          </div>
          <div class="col-6">
            <img class="" :src="'./img/visu_1.png'" alt="ecologie" />
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide>
      <swiper-slide>Slide 5</swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import Chart from "chart.js";
import planetChartData from "./chart-data.js";
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive,
  },
  name: "App",
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
        // Some Swiper option/callback...
      },
      planetChartData: planetChartData,
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  mounted() {
    console.log("array slider: ", this.swiper.slides);
    console.log("lenght : ", this.swiper.slides.length);
    this.swiper.slideTo(0, false);
    this.createChart("planet-chart", this.planetChartData);
  },
  methods: {
    // Chart
    createChart(chartId, chartData) {
      const ctx = document.getElementById(chartId);
      const myChart = new Chart(ctx, {
        type: chartData.type,
        data: chartData.data,
        options: chartData.options,
      });
      console.log(myChart);
    },
  },
};
</script>

<style>
html,
body {
  padding: 0;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
}

.swiper-container {
  height: 100vh;
}
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

h1 {
  position: absolute;
  margin: 0;
  left: 20px;
  top: 15px;
  text-transform: uppercase;
  font-weight: bold;
}

.col-12 {
  width: 100%;
}

.col-6 {
  width: 50%;
}

img {
  width: 80%;
}
</style>
