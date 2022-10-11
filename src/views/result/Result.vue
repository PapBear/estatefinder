<template>
  <div class="result">
    <HeaderResult @findAnotherEstate="findAnother()"></HeaderResult>
    <div class="result__modal" v-if="searchModal">
      <div class="result__modal-mask"></div>
      <HomeSearch @findEstate="(data) => processFind(data)"></HomeSearch>
    </div>
    <div class="result__body">
      <p class="result__body-text">13212 Homes found at <span class="result__body-text result__body-text_bold">{{currentResult ? currentResult.dataSearch.location.name : "-"}}</span></p>
      <div class="result__body-item" v-for="(dt,index) in dataEstate" :key="index">
        <ResultCard :dataEstate="dt"></ResultCard>
      </div>
    </div>
    <div class="result__bottom">
      <div class="result__bottom-section">
        <img src="@/assets/images/filter.png" />
        <p class="result__bottom-section-text">Filter</p>
      </div>
      <div class="result__bottom-separator"></div>
      <div class="result__bottom-section">
        <img src="@/assets/images/sort.png" />
        <p class="result__bottom-section-text">Sort</p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderResult from '@/components/HeaderResult.vue'
import HomeSearch from '@/components/HomeSearch.vue'
import ResultCard from '@/components/ResultCard.vue'

export default {
  name: 'Result',
  props: {
    resultData: Object
  },
  components: {
    HeaderResult,
    HomeSearch,
    ResultCard
  },
  data() {
    return {
      searchModal: false,
      dataEstate: [
        {
          image: [
            require('@/assets/images/house1.png'),
            require('@/assets/images/house2.png'),
            require('@/assets/images/house3.png'),
          ],
          room:  2,
          bathRoom: 1,
          area: 250,
          title: "Rumah Tipe 68 Jalan Petukangan Jakarta Selatan , Budi Hasian",
          price: "Rp 800 Juta"
        },
        {
          image: [
            require('@/assets/images/house1.png'),
            require('@/assets/images/house2.png'),
            require('@/assets/images/house3.png'),
          ],
          room:  2,
          bathRoom: 1,
          area: 250,
          title: "Rumah Tipe 68 Jalan Petukangan Jakarta Selatan , Budi Hasian",
          price: "Rp 800 Juta"
        },
        {
          image: [
            require('@/assets/images/house1.png'),
            require('@/assets/images/house2.png'),
            require('@/assets/images/house3.png'),
          ],
          room:  2,
          bathRoom: 1,
          area: 250,
          title: "Rumah Tipe 68 Jalan Petukangan Jakarta Selatan , Budi Hasian",
          price: "Rp 800 Juta"
        },
        {
          image: [
            require('@/assets/images/house1.png'),
            require('@/assets/images/house2.png'),
            require('@/assets/images/house3.png'),
          ],
          room:  2,
          bathRoom: 1,
          area: 250,
          title: "Rumah Tipe 68 Jalan Petukangan Jakarta Selatan , Budi Hasian",
          price: "Rp 800 Juta"
        },
        {
          image: [
            require('@/assets/images/house1.png'),
            require('@/assets/images/house2.png'),
            require('@/assets/images/house3.png'),
          ],
          room:  2,
          bathRoom: 1,
          area: 250,
          title: "Rumah Tipe 68 Jalan Petukangan Jakarta Selatan , Budi Hasian",
          price: "Rp 800 Juta"
        }
      ],
      currentResult: this.resultData
    }
  },
  mounted() {
    console.log(this.resultData)
  },
  methods: {
    processFind(data) {
      this.currentResult = data
      this.searchModal = false
    },
    findAnother() {
      this.searchModal = true
    }
  }
}
</script>
