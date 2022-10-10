<template>
  <div class="bottomnavigation">
    <div class="bottomnavigation__menu">
      <div class="bottomnavigation__menu-container">
        <div class="bottomnavigation__menu-circle">
          <img src="@/assets/images/search.png" alt="search"/>
        </div>
        <p class="bottomnavigation__menu-text">SEARCH</p>
      </div>
      <div class="bottomnavigation__menu-container">
        <div class="bottomnavigation__menu-circle">
          <img src="@/assets/images/chat.png" alt="chat"/>
        </div>
        <p class="bottomnavigation__menu-text">CHAT</p>
      </div>
      <div class="bottomnavigation__menu-container">
        <div class="bottomnavigation__menu-circle">
          <img src="@/assets/images/list.png" alt="list"/>
        </div>
        <p class="bottomnavigation__menu-text">CATEGORY</p>
      </div>
      <div class="bottomnavigation__menu-container">
        <div class="bottomnavigation__menu-circle">
          <img src="@/assets/images/history.png" alt="history"/>
        </div>
        <p class="bottomnavigation__menu-text">HISTORY</p>
      </div>
      <div class="bottomnavigation__menu-container">
        <div class="bottomnavigation__menu-circle">
          <img src="@/assets/images/user.png" alt="user"/>
        </div>
        <p class="bottomnavigation__menu-text">PROFILE</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BottomNavigation',
  props: {
    msg: String
  }
}
</script>

<style>

</style>
