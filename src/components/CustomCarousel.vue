<template>
  <div class="customcarousel">
    <div class="customcarousel__dot">
      <div class="customcarousel__dot-shape" :class="{'customcarousel__dot-shape_current': index === indexScroll}" v-for="(dt, index) in imageList" :key="index"></div>
    </div>
    <div class="customcarousel__list" :class="{'customcarousel__list_first': index === 0}" v-for="(img, index) in imageList" :key="index">
      <img class="customcarousel__list-img" :src="img" alt="image-house" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomCarousel',
  data() {
    return {
      imageList: [
        require('@/assets/images/house1.png'),
        require('@/assets/images/house2.png'),
        require('@/assets/images/house3.png'),
      ],
      indexScroll: 0
    }
  },
  mounted() {
    this.initialScroll()
    this.checkScrolling()
  },
  methods: {
    initialScroll() {
      const scrollElm = document.getElementsByClassName('customcarousel')[0]
      setTimeout(() => {
        scrollElm.scrollLeft = 0
      }, 100)
    },
    checkScrolling() {
      const scrollEvt = document.getElementsByClassName('customcarousel')[0]
      scrollEvt.addEventListener("scroll", () => {
        this.indexScroll = Math.round(scrollEvt.scrollLeft / 300)
      });
    }
  }
}
</script>

<style>

</style>
