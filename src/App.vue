<template>
  <div id="app">
    <h1>zéro déchet</h1>
    <nav>
      <ul>
        <li>
          <p
            v-on:click="swiper.slideTo(0, false)"
            class="nav-link slide-1"
            v-bind:class="`${this.index >= 0 ? 'is-active' : ''}`"
          >
            Step 1
          </p>
        </li>
        <li>
          <p
            v-on:click="swiper.slideTo(1, false)"
            class="nav-link slide-2"
            v-bind:class="`${this.index >= 1 ? 'is-active' : ''}`"
          >
            Step 2
          </p>
        </li>
        <li>
          <p
            v-on:click="swiper.slideTo(2, false)"
            class="nav-link slide-3"
            v-bind:class="`${this.index >= 2 ? 'is-active' : ''}`"
          >
            Step 3
          </p>
        </li>
        <li>
          <p
            v-on:click="swiper.slideTo(3, false)"
            class="nav-link slide-4"
            v-bind:class="`${this.index >= 3 ? 'is-active' : ''}`"
          >
            Step 4
          </p>
        </li>
        <li>
          <p
            v-on:click="swiper.slideTo(4, false)"
            class="nav-link slide-5"
            v-bind:class="`${this.index >= 4 ? 'is-active' : ''}`"
          >
            Step 5
          </p>
        </li>
      </ul>
    </nav>
    <swiper
      ref="mySwiper"
      :options="swiperOptions"
      @slideChange="changeSwiperIndex"
    >
      <swiper-slide>
        <div class="content">
          <div class="col-6">
            <h2 class="u-center">Type de déchets</h2>
            <p class="u-small u-center u-marg-b">
              en fonction du nombre d'habitants en France
            </p>
            <canvas id="planet-chart"></canvas>
          </div>
          <div class="col-6">
            <p class="u-xl u-center">12</p>
            <p class="u-small u-center">tonnes</p>
            <img class="" :src="'./img/visu_1.png'" alt="ecologie" />
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="content">
          <div class="col-6">
            <canvas id="bar-chart"></canvas>
          </div>
          <!-- <div class="col-6">
          <img class="" :src="'./img/visu_2.png'" alt="ecologie" />
          </div> -->
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="content">
          <div class="col-6">
            <canvas id="bubble-chart"></canvas>
          </div>
          <!-- <div class="col-6">
            <img class="" :src="'./img/visu_1.png'" alt="ecologie" />
          </div> -->
        </div>
      </swiper-slide>
      <swiper-slide>
        <!-- <div class="content">
          <div class="col-6">
            <img class="" :src="'./img/visu_2.png'" alt="ecologie" />
          </div>
        </div> -->
      </swiper-slide>
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
$color-white: #ffffff;
$color-black: #000000;
$color-grey: #c1c1c1;
$color-yellow: #fdce62;
$color-green: #bcda97;
$color-purple: #808ae5;

html,
body {
  padding: 0;
  margin: 0;
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

.u-flex {
  display: flex;
}

h1 {
  position: absolute;
  margin: 0;
  left: 20px;
  top: 15px;
  text-transform: uppercase;
  font-weight: bold;
  color: $color-yellow;
}

h2 {
  margin: 0;
}

p {
  margin: 0;
}

.u-center {
  text-align: center;
}

.u-small {
  font-size: 14px;
}

.u-xl {
  font-size: 100px;
  font-weight: bold;
  line-height: 5rem;
  color: $color-purple;
}

.u-marg-b {
  margin-bottom: 35px;
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

nav {
  position: relative;
  width: 80%;
  margin: auto;
  top: 100px;
  ul {
    display: flex;
    justify-content: space-between;
    padding: 0;
  }
  li {
    z-index: 2;
    padding: 0 10px;
    list-style: none;
    background-color: $color-white;
  }

  .nav-link {
    color: $color-grey;
    &:hover {
      cursor: pointer;
    }
    &.is-active {
      color: $color-purple;
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: 9px;
    left: 0;
    width: 100%;
    height: 5px;
    background-color: $color-green;
  }
}
</style>
