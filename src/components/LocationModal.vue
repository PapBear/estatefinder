<template>
  <div class="home__modal-location" :class="{'home__modal-location_show': showModal}">
    <div class="home__modal-location-header">
      <img class="home__modal-location-header-close" src="@/assets/images/close.png" alt="close" @click="closeModal"/>
      <input class="home__modal-location-header-input" placeholder="Type keyword here..."/>
    </div>
    <div class="home__modal-location-result">
      <p class="home__modal-location-result-text">Most people find:</p>
      <div class="home__modal-location-result-list" v-for="(loc,index) in resultData" :key="index" @click="chooseLocation(loc)">
        <img  class="home__search-menu-item-image" src="@/assets/images/location-smaller.png" alt="location" />
        <p class="home__modal-location-result-list-name">{{loc.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'LocationModal',
  props: {
    showStatus: Boolean
  },
  data() {
    return {
      resultData: [
        {
          name: "Jakarta Utara",
          code: "jakartautara"
        },
        {
          name: "Jakarta Timur",
          code: "jakartatimur"
        },
        {
          name: "Jakarta Barat",
          code: "jakartabarat"
        },
        {
          name: "Jakarta Pusat",
          code: "jakartapusat"
        },
        {
          name: "Bekasi",
          code: "bekasi"
        },
        {
          name: "Tangerang",
          code: "tangerang"
        }
      ],
      showModal: this.showStatus
    }
  },
  mounted() {

  },
  methods: {
    closeModal() {
      this.showModal = false
      this.$emit('resetModal')
    },
    chooseLocation(location) {
      this.$emit('handleLocation', location)
      this.closeModal()
    }
  },
  watch: {
    showStatus(val) {
      this.showModal = val
    }
  }
}
</script>
