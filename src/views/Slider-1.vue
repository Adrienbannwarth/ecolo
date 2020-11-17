<template>
  <div class="slider-1">
    <div class="c-graph u-flex u-center">
      <div class="col-12">
       <p class="p-italic c-slide__title">→ Combien de planète Terre faudrait-il si la population mondiale vivait comme les habitants de ...</p>
      </div>
      <div class="col-2 column-planet">
        <div class="u-flex align-items-center">
          <p class="u-rotate text--md">Australie</p>
          <div class="u-flex flex-column align-items-center">
            <img
              ref="one"
              class="img-planet"
              :src="'./img/earth.png'"
              alt="ecologie"
            />
            <img
              ref="two"
              class="img-planet"
              :src="'./img/earth.png'"
              alt="ecologie"
            />
            <img
              ref="three"
              class="img-planet"
              :src="'./img/earth.png'"
              alt="ecologie"
            />
            <img class="img-planet" :src="'./img/earth.png'" alt="ecologie" />
            <img class="img-planet" :src="'./img/earth.png'" alt="ecologie" />
          </div>
        </div>
        <span class="text--xl">5,2</span>
      </div>
      <div class="col-2 column-planet">
        <div class="u-flex align-items-center">
          <p class="u-rotate text--md">Etats-Unis</p>
          <div class="u-flex flex-column align-items-center">
            <img class="img-planet" :src="'./img/earth.png'" alt="ecologie" />
            <img class="img-planet" :src="'./img/earth.png'" alt="ecologie" />
            <img class="img-planet" :src="'./img/earth.png'" alt="ecologie" />
            <img class="img-planet" :src="'./img/earth.png'" alt="ecologie" />
          </div>
        </div>
        <span class="text--xl">5</span>
      </div>
      <div class="col-2 column-planet">
        <div class="u-flex align-items-center">
          <p class="u-rotate text--md">France</p>
          <div class="u-flex flex-column align-items-center">
            <img class="img-planet" :src="'./img/earth.png'" alt="ecologie" />
            <img class="img-planet" :src="'./img/earth.png'" alt="ecologie" />
            <img class="img-planet" :src="'./img/earth.png'" alt="ecologie" />
          </div>
        </div>
        <span class="text--xl">3</span>
      </div>
      <div class="col-2 column-planet">
        <div class="u-flex align-items-center">
          <p class="u-rotate text--md">Chine</p>
          <div class="u-flex flex-column align-items-center">
            <img class="img-planet" :src="'./img/earth.png'" alt="ecologie" />
            <img class="img-planet" :src="'./img/earth.png'" alt="ecologie" />
          </div>
        </div>
        <span class="text--xl">2,1</span>
      </div>
      <div class="col-2 column-planet">
        <div class="u-flex align-items-center">
          <p class="u-rotate text--md">Inde</p>
          <div class="u-flex flex-column align-items-center">
            <img class="img-planet" :src="'./img/earth.png'" alt="ecologie" />
          </div>
        </div>
        <span class="text--xl">0,6</span>
      </div>
    </div>
  </div>
</template>


<script>
import { TimelineLite, Back } from "gsap";
export default {
  mounted() {
    const { one, two, three } = this.$refs;
    const timeline = new TimelineLite();

    timeline.from(three, 1, {
      y: -50,
      opacity: 0,
      delay: 0.2,
      ease: Back.easeInOut,
    });
    timeline.from(
      two,
      1,
      {
        y: -50,
        opacity: 0,
        delay: 0.2,
        ease: Back.easeInOut,
      },
      "-=1"
    );
    timeline.from(
      one,
      1,
      {
        y: -50,
        opacity: 0,
        delay: 0.2,
        ease: Back.easeInOut,
      },
      "-=1"
    );
  },
};
</script>

       