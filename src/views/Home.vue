<template>
  <div class="home">
    <CustomCarousel></CustomCarousel>
    <div class="home__search-menu">
      <div class="home__search-menu-item">
        <img  class="home__search-menu-item-image" src="@/assets/images/location.png" alt="location" />
        <div class="home__search-menu-item-container">
          <p class="home__search-menu-item-title">Pick Location</p>
          <p class="home__search-menu-item-value">Jakarta Selatan</p>
        </div>
      </div>
      <div class="home__search-menu-item">
        <img  class="home__search-menu-item-image" src="@/assets/images/house.png" alt="location" />
        <div class="home__search-menu-item-container">
          <p class="home__search-menu-item-title">Type Of Property</p>
          <p class="home__search-menu-item-value">House</p>
        </div>
      </div>
      <div class="home__search-menu-item">
        <img  class="home__search-menu-item-image" src="@/assets/images/status.png" alt="location" />
        <div class="home__search-menu-item-container">
          <p class="home__search-menu-item-title">Status</p>
          <p class="home__search-menu-item-value">Rent</p>
        </div>
      </div>
    </div>
    <div class="home__search-button-container">
      <div class="home__search-button">
        <p class="home__search-button-text">find</p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CustomCarousel from '@/components/CustomCarousel.vue'

export default {
  name: 'Home',
  components: {
    CustomCarousel
  }
}
</script>
