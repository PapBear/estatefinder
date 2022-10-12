<template>
  <div class="home__modal-property" v-show="showStatus">
    <div class="home__modal-property-mask" :class="{'home__modal-property-mask_show': showStatus}"></div>
    <div class="home__modal-property-body" :class="{'home__modal-property-body_show': showModal}">
      <div class="home__modal-property-body-header">
        <img class="home__modal-location-header-close" src="@/assets/images/close.png" alt="close" @click="closeModal"/>
        <p class="home__modal-property-body-header-text">Status</p>
      </div>
      <div class="home__modal-property-body-list" v-for="(dt, index) in propertyList" :key="index" @click="chooseStatus(dt)">
        <p class="home__modal-property-body-list-text">{{dt.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'PropertyModal',
  props: {
    showStatus: Boolean
  },
  data() {
    return {
      propertyList: [
        {
          name: "Rent",
          value: "rent"
        },
        {
          name: "Buy",
          value: "buy"
        },
        {
          name: "Auction",
          value: "auction"
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
      setTimeout(() => {
        this.$emit('resetModal')
      }, 400)
    },
    chooseStatus(status) {
      this.$emit('handleStatus', status)
      this.closeModal()
    }
  },
  watch: {
    showStatus(val) {
      setTimeout(() => {
        this.showModal = val
      }, 100)
    }
  }
}
</script>
