<template>
  <div id="app">
    <div class="app__container">
      <Header></Header>
      <div class="app__body">
        <router-view/>
      </div>
      <BottomNavigation></BottomNavigation>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import BottomNavigation from '@/components/BottomNavigation.vue'

export default {
  name: 'App',
  components: {
    Header,
    BottomNavigation
  }
}
</script>

<style lang="scss">
  @import './assets/scss/style';
  

  #app {
    width: 100vw;
    height: 100vh;
    max-width: 414px;
    margin: 0 auto;
    background-color: white ;
    overflow: auto;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  .app {
    &__container {
      
    }
    &__body {
      padding-top: 74px;
    }
  }
</style>
