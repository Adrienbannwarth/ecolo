<template>
  <div id="app">
    <!--------------->
    <!----  NAV ----->
    <!--------------->
    <nav>
      <ul>
        <li>
          <p
            v-on:click="swiper.slideTo(0, false)"
            class="nav-link slide-1"
            v-bind:class="`${this.index >= 0 ? 'is-active' : ''}`"
          >
            <!-- Etat des lieux -->
          </p>
        </li>
        <li>
          <p
            v-on:click="swiper.slideTo(1, false)"
            class="nav-link slide-2"
            v-bind:class="`${this.index >= 1 ? 'is-active' : ''}`"
          >
            <!-- Alimentation -->
          </p>
        </li>
        <li>
          <p
            v-on:click="swiper.slideTo(2, false)"
            class="nav-link slide-3"
            v-bind:class="`${this.index >= 2 ? 'is-active' : ''}`"
          >
            <!-- hygiène et intimité -->
          </p>
        </li>
        <li>
          <p
            v-on:click="swiper.slideTo(3, false)"
            class="nav-link slide-4"
            v-bind:class="`${this.index >= 3 ? 'is-active' : ''}`"
          >
            <!-- Industrie textile et mode -->
          </p>
        </li>
        <li>
          <p
            v-on:click="swiper.slideTo(4, false)"
            class="nav-link slide-5"
            v-bind:class="`${this.index >= 4 ? 'is-active' : ''}`"
          >
            <!-- Energie et eau -->
          </p>
        </li>
        <li>
          <p
            v-on:click="swiper.slideTo(4, false)"
            class="nav-link slide-5"
            v-bind:class="`${this.index >= 4 ? 'is-active' : ''}`"
          >
            <!-- Mobilité -->
          </p>
        </li>
      </ul>
    </nav>

    <!--------------->
    <!----SLIDER----->
    <!--------------->
    <swiper
      ref="mySwiper"
      :options="swiperOptions"
      @slideChange="changeSwiperIndex"
    >
      <swiper-slide>
        <Slider1 />
      </swiper-slide>
      <swiper-slide>
          <Slider2 />
      </swiper-slide>
      <swiper-slide>
        <div class="content">
          <div class="col-6"></div>
        </div>
      </swiper-slide>
      <swiper-slide> </swiper-slide>
      <swiper-slide>
        <div class="content">
          <div class="col-6">
            <img class="" :src="'./img/visu_2.png'" alt="ecologie" />
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import Chart from "chart.js";
import planetChartData from "./chart-data.js";
import myBarChart from "./chart-data-2.js";
import myBubbleChart from "./chart-data-3.js";

import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import Slider1 from "../src/views/Slider-1";
import Slider2 from "../src/views/Slider-2";

export default {
  components: {
    Swiper,
    SwiperSlide,
    Slider1,
    Slider2,
  },
  directives: {
    swiper: directive,
  },
  name: "App",
  data() {
    return {
      index: 0,
      swiperOptions: {},
      planetChartData: planetChartData,
      myBarChart: myBarChart,
      myBubbleChart: myBubbleChart,
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  mounted() {
    this.createChart("planet-chart", this.planetChartData);
    this.createChart("bar-chart", this.myBarChart);
    this.createChart("bubble-chart", this.myBubbleChart);
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

    changeSwiperIndex() {
      this.index = this.$refs.mySwiper.$swiper.activeIndex;
      console.log(this.index);
    },
  },
};
</script>

<style lang="scss">
@import "./assets/scss/styles.scss";

@import url("https://fonts.googleapis.com/css2?family=Anton&display=swap");

html,
body {
  padding: 0;
  margin: 0;
  background-color: #fcfff6;
  font-size: 10px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.swiper-container {
  height: calc(100vh - 55px);
}
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 90%;
  height: 100%;
}

.col-12 {
  width: 100%;
}

.col-6 {
  width: 50%;
}

.col-2 {
  width: 20%;
  height: 80%;
}

.img-planet {
  width: 60%;
}

.column-planet {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
</style>
