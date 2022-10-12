<template>
  <div class="resultcard" @click="goToDetail()">
    <div class="resultcard__content">
      <!-- <div class="resultcard__content-image-container">
        <div class="resultcard__content-image-list" v-for="(dt,index) in dataEstate.image" :key="index">
          <img class="resultcard__content-image" :src="dt"/>
        </div>
      </div> -->
      <ImageCarousel :imageList="dataEstate.image" :smallerImage="smallerImage"></ImageCarousel>
      <div class="resultcard__content-information">
        <p class="resultcard__content-information-text">{{dataEstate.room}} {{dataEstate.room > 1 ? "ROOMS" : "ROOM"}}</p>
        <div class="resultcard__content-circle"></div>
        <p class="resultcard__content-information-text">{{dataEstate.bathRoom}} {{dataEstate.bathRoom > 1 ? "BATH ROOMS" : "BATH ROOM"}}</p>
        <div class="resultcard__content-circle"></div>
        <p class="resultcard__content-information-text">{{dataEstate.area}} M<span class="resultcard__content-information-text_sup">2</span></p>
      </div>
      <div class="resultcard__content-title">
        <p class="resultcard__content-title-text">{{dataEstate.title}}</p>
      </div>
      <p class="resultcard__content-information-text">{{dataEstate.price}}</p>
    </div>
  </div>
</template>

<script>
import ImageCarousel from "@/components/ImageCarousel.vue"
export default {
  name: 'ResultCard',
  props: {
    dataEstate: Object,
    smallerImage: Boolean
  },
  components: {
    ImageCarousel
  },
  mounted() {

  },
  methods: {
    goToDetail() {
      this.$router.push({ name: 'Detail', params: {dataEstate: this.dataEstate }})
    }
  }
}
</script>

<style>

</style>
