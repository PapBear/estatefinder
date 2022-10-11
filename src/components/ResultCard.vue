<template>
  <div class="resultcard" @click="goToDetail()">
    <div class="resultcard__content">
      <img class="resultcard__content-image" :src="dataEstate.image[0]"/>
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
export default {
  name: 'ResultCard',
  props: {
    dataEstate: Object
  },
  mounted() {
    console.log(this.dataEstate)
  },
  methods: {
    goToDetail() {
      this.$router.push('/detail')
    }
  }
}
</script>

<style>

</style>
