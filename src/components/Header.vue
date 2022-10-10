<template>
  <div class="header">
    <div class="header__left">
      <p class="header__left-title">REAL ESTATE FINDER</p>
    </div>
    <div class="header__right">
      <img src="@/assets/images/notification.png" class="header__right-image header__right-image_first" alt="notification">
      <img src="@/assets/images/favorite.png" class="header__right-image" alt="favorite">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>

<style>

</style>
