<template>
  <div>
    <div class="customcarousel__dot_image">
      <div class="customcarousel__dot-shape" :class="{'customcarousel__dot-shape_current': index === indexScroll}" v-for="(dt, index) in imageList" :key="index"></div>
    </div>
    <div class="resultcard__content-image-container">
      <div class="resultcard__content-image-list" v-for="(dt,index) in imageList" :key="index">
        <img class="resultcard__content-image" :class="{'resultcard__content-image_smaller' :smallerImage === true}" :src="dt"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomCarousel',
  props: {
    imageList: Array,
    smallerImage: Boolean
  },
  data() {
    return {
      indexScroll: 0
    }
  },
  mounted() {
    this.initialScroll()
    this.checkScrolling()
    console.log(this.smallerImage)
  },
  methods: {
    initialScroll() {
      const scrollElm = document.getElementsByClassName('resultcard__content-image-container')[0]
      setTimeout(() => {
        scrollElm.scrollLeft = 0
      }, 100)
    },
    checkScrolling() {
      const scrollEvt = document.getElementsByClassName('resultcard__content-image-container')[0]
      scrollEvt.addEventListener("scroll", () => {
        this.indexScroll = Math.round(scrollEvt.scrollLeft / (window.screen.width - 44 ))
        console.log(this.indexScroll)
      });
    }
  }
}
</script>

<style>

</style>
