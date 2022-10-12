<template>
  <div class="detail">
    <img class="detail__image" :src="dataEstate.image[0]" alt="big house" />
    <div class="detail__content">
      <div class="detail__content-information">
        <p class="detail__content-information-text">{{dataEstate.room}} {{dataEstate.room > 1 ? "ROOMS" : "ROOM"}}</p>
        <div class="detail__content-circle"></div>
        <p class="detail__content-information-text">{{dataEstate.bathRoom}} {{dataEstate.bathRoom > 1 ? "BATH ROOMS" : "BATH ROOM"}}</p>
        <div class="detail__content-circle"></div>
        <p class="detail__content-information-text">{{dataEstate.area}} M<span class="detail__content-information-text_sup">2</span></p>
      </div>
      <div class="detail__content-title">
         <p class="detail__content-title-text">{{dataEstate.title}}</p>
      </div>
      <div class="detail__content-option">
        <div class="detail__content-option-item" :class="{'detail__content-option-item_selected': menuSelected === 'detail'}" @click="changeMenu('detail')">
          <p class="detail__content-option-item-text">Detail</p>
        </div>
        <div class="detail__content-option-item" :class="{'detail__content-option-item_selected': menuSelected === 'map'}" @click="changeMenu('map')">
          <p class="detail__content-option-item-text">Map</p>
        </div>
        <div class="detail__content-option-item" :class="{'detail__content-option-item_selected': menuSelected === 'loan'}" @click="changeMenu('loan')">
          <p class="detail__content-option-item-text">Loan</p>
        </div>
      </div>
      <div class="detail__content-data">
        <div class="detail__content-data-input">
          <p class="detail__content-data-input-title">Type of Property</p>
          <p class="detail__content-data-input-value">{{dataEstate.type.name}}</p>
        </div>
        <div class="detail__content-data-input">
          <p class="detail__content-data-input-title">Status</p>
          <p class="detail__content-data-input-value">{{dataEstate.status.name}}</p>
        </div>
        <div class="detail__content-data-input">
          <p class="detail__content-data-input-title">Certification</p>
          <p class="detail__content-data-input-value">{{dataEstate.certification}}</p>
        </div>
        <div class="detail__content-data-input">
          <p class="detail__content-data-input-title">Area</p>
          <p class="detail__content-data-input-value">{{dataEstate.area}} M<span class="resultcard__content-information-text_sup">2</span></p>
        </div>
        <div class="detail__content-data-input">
          <p class="detail__content-data-input-title">Building Size</p>
          <p class="detail__content-data-input-value">{{dataEstate.buildingSize}} M<span class="resultcard__content-information-text_sup">2</span></p>
        </div>
        <div class="detail__content-data-input">
          <p class="detail__content-data-input-title">Full Furnished</p>
          <p class="detail__content-data-input-value">{{dataEstate.furnished}}</p>
        </div>
        <div class="detail__content-data-input">
          <p class="detail__content-data-input-title">Garage</p>
          <p class="detail__content-data-input-value">{{dataEstate.garage}}</p>
        </div>
        <div class="detail__content-data-input">
          <p class="detail__content-data-input-title">Carport</p>
          <p class="detail__content-data-input-value">{{dataEstate.Carport}}</p>
        </div>
      </div>
    </div>
    <div class="detail__loan">
      <div class="detail__loan-information">
        <p class="detail__loan-information-title">See loan options. start from</p>
        <p class="detail__loan-information-price">Rp 1.2 Juta <span class="detail__loan-information-title_small">/ Bulan</span></p>
      </div>
      <div class="detail__loan-button">
        <div class="detail__loan-button-shape">
          <p class="detail__loan-button-shape-text">LOAN</p>
        </div>
      </div>
    </div>
    <div class="detail__landlord">
      <img src="@/assets/images/landlord.png" />
      <div class="detail__landlord-information">
        <div class="detail__landlord-information-name">
          <p class="detail__landlord-information-name-text">Joshua Hendrawan</p>
          <div class="detail__content-circle"></div>
          <p class="detail__landlord-information-name-text">Landlord</p>
        </div>
        <div class="detail__landlord-information-status">
          <p class="detail__landlord-information-status-text">Last Online : 1 hour ago</p>
        </div>
      </div>
    </div>
    <div class="detail__another-props">
      <p class="detail__another-props-text">Property near Jakarta Selatan</p>
      <div class="detail__another-props-scroll">
        <div class="detail__another-props-container">
          <div class="detail__another-props-item" v-for="(dt,index) in moreEstate" :key="index">
            <ResultCard :dataEstate="dt" :smallerImage="true"></ResultCard>
          </div>
        </div>
      </div>
    </div>
    <div class="detail__bottom">
      <div class="detail__bottom-price">
        <p class="detail__bottom-price-text">Price Start From :</p>
        <p class="detail__bottom-price-text">{{dataEstate.price}}</p>
      </div>
      <div class="detail__bottom-contact">
        <div class="detail__bottom-contact-button" @click="goToChat()">
          <img src="@/assets/images/message.png" alt="message" />
          <p class="detail__bottom-contact-button-text">Contact Landlord</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ResultCard from '@/components/ResultCard.vue'

export default {
  name: 'Detail',
  props: {
    dataEstate: Object
  },
  components: {
    ResultCard
  },
  data() {
    return {
      // dataEstate: {
      //   image: [
      //     require('@/assets/images/house1.png'),
      //     require('@/assets/images/house2.png'),
      //     require('@/assets/images/house3.png'),
      //   ],
      //   room:  2,
      //   bathRoom: 1,
      //   area: 250,
      //   buildingSize: 300,
      //   furnished: "Yes",
      //   garage: "Yes",
      //   Carport: "No",
      //   title: "Rumah Tipe 68 Jalan Petukangan Jakarta Selatan , Budi Hasian",
      //   price: "Rp 800 Juta",
      //   certification: "SHM",
      //   location: {
      //     name: "Jakarta Selatan",
      //     code: "jakartaselatan"
      //   },
      //   type: {
      //     name: "House",
      //     value: "house"
      //   },
      //   status: {
      //     name: "Rent",
      //     value: "rent"
      //   },
      // },
      moreEstate: [
        {
          image: [
            require('@/assets/images/house1.png'),
            require('@/assets/images/house2.png'),
            require('@/assets/images/house3.png'),
          ],
          room:  2,
          bathRoom: 1,
          area: 250,
          buildingSize: 300,
          furnished: "Yes",
          garage: "Yes",
          Carport: "No",
          title: "Rumah Tipe 68 Jalan Petukangan Jakarta Selatan , Budi Hasian",
          price: "Rp 800 Juta",
          certification: "SHM",
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
        {
          image: [
            require('@/assets/images/house1.png'),
            require('@/assets/images/house2.png'),
            require('@/assets/images/house3.png'),
          ],
          room:  2,
          bathRoom: 1,
          area: 250,
          buildingSize: 300,
          furnished: "Yes",
          garage: "Yes",
          Carport: "No",
          title: "Rumah Tipe 68 Jalan Petukangan Jakarta Selatan , Budi Hasian",
          price: "Rp 800 Juta",
          certification: "SHM",
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
        {
          image: [
            require('@/assets/images/house1.png'),
            require('@/assets/images/house2.png'),
            require('@/assets/images/house3.png'),
          ],
          room:  2,
          bathRoom: 1,
          area: 250,
          buildingSize: 300,
          furnished: "Yes",
          garage: "Yes",
          Carport: "No",
          title: "Rumah Tipe 68 Jalan Petukangan Jakarta Selatan , Budi Hasian",
          price: "Rp 800 Juta",
          certification: "SHM",
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
      ],
      menuSelected: "detail"
    }
  },
  mounted() {
    this.checkData()
  },
  methods: {
    checkData() {
      if(!this.dataEstate) {
        this.backToHome()
      }
    },
    backToHome() {
      this.$router.push("/")
    },
    changeMenu(param) {
      this.menuSelected = param
    },
    goToChat() {
      this.$router.push('/chat')
    }
  }
}
</script>
