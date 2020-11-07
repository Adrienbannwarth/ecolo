<template>
  <div v-if="!isHidden" class="c-loading">
    <p ref="line" class="c-loading__line u-white">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui vel, est
      corporis maiores doloremque accusamus.
    </p>
    <p ref="line2" class="c-loading__line u-white">
      deuxième Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui
      vel, est corporis maiores doloremque accusamus.
    </p>
    <p ref="line3" class="c-loading__line u-white">
      troisième Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui
      vel, est corporis maiores doloremque accusamus.
    </p>

    <button v-on:click="isHidden = !isHidden" ref="btn" class="c-loading__btn">Découvrir</button>
  </div>
</template>

<script>
import { TimelineLite, Back } from "gsap";
export default {
  data() {
    return {
      isHidden: false,
    };
  },
  mounted() {
    const { line, line2, line3, btn } = this.$refs;
    const timeline = new TimelineLite();

    timeline.from(line, 1, {
      y: 100,
      opacity: 0,
      delay: 0.2,
      skewY: 2,
      ease: Back.out,
    });

    timeline.to(line, 1, {
      y: -100,
      opacity: 0,
      delay: 1,
      skewY: 2,
      ease: Back.out,
    });

    timeline.from(line2, 1, {
      y: 100,
      opacity: 0,
      delay: 0.5,
      skewY: 2,
      ease: Back.out,
    });

    timeline.to(line2, 1, {
      y: -100,
      opacity: 0,
      delay: 1,
      skewY: 2,
      ease: Back.out,
    });

    timeline.from(line3, 1, {
      y: 100,
      opacity: 0,
      delay: 0.5,
      skewY: 2,
      ease: Back.out,
    });

    timeline.to(line3, 1, {
      y: -100,
      opacity: 0,
      delay: 1,
      skewY: 2,
      ease: Back.out,
    });

    timeline.from(btn, 1, {
      y: 100,
      opacity: 0,
      delay: 0.5,
      skewY: 2,
      ease: Back.out,
    });
  },
};
</script>