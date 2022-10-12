<template>
  <div class="home__search-menu-container">
    <div class="home__search-menu">
      <div class="home__search-menu-item" @click="pressMenu('location')">
        <img  class="home__search-menu-item-image" src="@/assets/images/location.png" alt="location" />
        <div class="home__search-menu-item-container">
          <p class="home__search-menu-item-title">Pick Location</p>
          <p class="home__search-menu-item-value">{{dataSearch.location.name}}</p>
        </div>
      </div>
      <div class="home__search-menu-item" @click="pressMenu('property')">
        <img  class="home__search-menu-item-image" src="@/assets/images/house.png" alt="location" />
        <div class="home__search-menu-item-container">
          <p class="home__search-menu-item-title">Type Of Property</p>
          <p class="home__search-menu-item-value">{{dataSearch.type.name}}</p>
        </div>
      </div>
      <div class="home__search-menu-item" @click="pressMenu('rent')">
        <img  class="home__search-menu-item-image" src="@/assets/images/status.png" alt="location" />
        <div class="home__search-menu-item-container">
          <p class="home__search-menu-item-title">Status</p>
          <p class="home__search-menu-item-value">{{dataSearch.status.name}}</p>
        </div>
      </div>
    </div>
    <div class="home__search-button-container" @click="$emit('findEstate', {dataSearch})">
      <div class="home__search-button">
        <p class="home__search-button-text">FIND</p>
      </div>
    </div>

    <!-- Modal Location / Type / Status -->
    <LocationModal :showStatus="locationStatus" @resetModal="() => resetModal()" @handleLocation="(data) => handleLocation(data)"></LocationModal>
    <PropertyModal :showStatus="propertyStatus" @resetModal="() => resetModal()" @handleProperty="(data) => handleProperty(data)"></PropertyModal>
    <StatusModal :showStatus="rentStatus" @resetModal="() => resetModal()" @handleStatus="(data) => handleStatus(data)"></StatusModal>
  </div>
</template>

<script>
import LocationModal from '@/components/LocationModal.vue'
import PropertyModal from '@/components/PropertyModal.vue'
import StatusModal from '@/components/StatusModal.vue'

export default {
  name: 'HomeSearch',
  components: {
    LocationModal,
    PropertyModal,
    StatusModal
  },
  data() {
    return {
      dataSearch: {
        location: {
          name: "Jakarta Selatan",
          code: "jakartaselatan"
        },
        type: {
          name: "House",
          value: "house"
        },
        status: {
          name: "Rent",
          value: "rent"
        },
      },
      locationStatus: false,
      propertyStatus: false,
      rentStatus: false
    }
  },
  mounted() {

  },
  methods: {
    pressMenu(param) {
      switch(param) {
        case "location":
          this.locationStatus = true
          this.propertyStatus = false
          this.rentStatus = false
          break;
        case "property":
          this.locationStatus = false
          this.propertyStatus = true
          this.rentStatus = false
          break;
        case "rent":
          this.locationStatus = false
          this.propertyStatus = false
          this.rentStatus = true
          break;
      }
    },
    resetModal() {
      this.locationStatus = false
      this.propertyStatus = false
      this.rentStatus = false
    },
    handleLocation(location) {
      this.dataSearch = {...this.dataSearch, location: location}
    },
    handleProperty(property) {
      this.dataSearch = {...this.dataSearch, type: property}
    },
    handleStatus(status) {
      this.dataSearch = {...this.dataSearch, status: status}
    }
  }
}
</script>
