<template>
  <div class="headerresult">
    <div class="headerresult__container">
      <div class="headerresult__back" @click="backToHome()">
        <img src="@/assets/images/arrow-left.png" alt="arrow-left" />
      </div>
      <div class="headerresult__find" @click="findAnother()">
        <div class="headerresult__find-input" placeholder="Rent house at Jakarta Selatan">
          <p class="headerresult__find-input-text">Rent house at Jakarta Selatan</p>
        </div>
        <img class="headerresult__find-glass" src="@/assets/images/darker-glass.svg" alt="magnifying glass" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  },
  methods: {
    backToHome() {
      this.$router.push('/')
    },
    findAnother() {
      this.$emit('findAnotherEstate')
    }
  }
}
</script>

<style>

</style>
