<template>
  <div class="home">
    <Header></Header>
    <CustomCarousel></CustomCarousel>
    <HomeSearch @findEstate="(data) => processFind(data)"></HomeSearch>
    <BottomNavigation></BottomNavigation>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import BottomNavigation from '@/components/BottomNavigation.vue'
import CustomCarousel from '@/components/CustomCarousel.vue'
import HomeSearch from '@/components/HomeSearch.vue'

export default {
  name: 'Home',
  components: {
    Header,
    BottomNavigation,
    CustomCarousel,
    HomeSearch
  },
  data() {
    return {

    }
  },
  mounted() {

  },
  methods: {
    processFind(data) {
      this.$router.push({ name: 'Result', params: {resultData: data }})
    }
  }
}
</script>
