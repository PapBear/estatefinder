<template>
  <div class="result">
    <HeaderResult @findAnotherEstate="findAnother()"></HeaderResult>
    <div class="result__modal" v-if="searchModal">
      <div class="result__modal-mask"></div>
      <HomeSearch @findEstate="(data) => processFind(data)"></HomeSearch>
    </div>
    <div class="result__body">
      <p class="result__body-text">13212 Homes found at <span class="result__body-text result__body-text_bold">{{resultData ? resultData.dataSearch.location.name : "-"}}</span></p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderResult from '@/components/HeaderResult.vue'
import HomeSearch from '@/components/HomeSearch.vue'

export default {
  name: 'Result',
  props: {
    resultData: Object
  },
  components: {
    HeaderResult,
    HomeSearch
  },
  data() {
    return {
      searchModal: false
    }
  },
  mounted() {
    console.log(this.resultData)
  },
  methods: {
    processFind() {
      this.searchModal = false
    },
    findAnother() {
      this.searchModal = true
    }
  }
}
</script>
