<template>
  <div class="chat">
    <div class="chat__header">
      <img class="chat__header-back" src="@/assets/images/arrow-left.png" alt="back" @click="backToHome()"/>
      <div class="chat__header-status">
        <div class="chat__header-status-icon"></div>
        <p class="chat__header-status-name">Joshua Hendrawan</p>
      </div>
      <img class="chat__header-tridot" src="@/assets/images/tri-dot.png" alt="tri-dot" />
    </div>
    <div class="chat__body">
      <img class="chat__body-image" src="@/assets/images/offline.png" alt="offline-image"/>
      <p class="chat__body-title">Landlord Offline</p>
      <p class="chat__body-desc">Lorem ipsum dolor sit amet consecteur adipsing elit</p>
    </div>
    <div class="chat__message">
      <input class="chat__message-input" placeholder="Type message..."/>
      <img  class="chat__message-image" src="@/assets/images/send.png" alt="offline-image"/>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Chat',
  components: {

  },
  data() {
    return {

    }
  },
  mounted() {

  },
  methods: {
    backToHome() {
      this.$router.push("/")
    }
  }
}
</script>
