<template>
  <v-card class="card-fixed flex">
    <v-row class="flex align-center">
      <v-col cols="1" offset="1" class="px-0">
        <v-img
          class="ml-10"
          max-height="100"
          max-width="100"
          :src="getSendData.image"
        ></v-img>
      </v-col>
      <v-col cols="4" class="card-fixed__title">
        <v-card-title>{{ getData.title }}</v-card-title>
        <v-card-subtitle> Everything you need for freshman</v-card-subtitle>
      </v-col>
      <v-col cols="1" class="text-center">
        <v-card-subtitle>Add Ons</v-card-subtitle>
        <v-card-subtitle>
          <v-icon color="#ccc">mdi-plus</v-icon>
        </v-card-subtitle>
      </v-col>
      <v-col cols="3" offset="2" class="card-fixed__price flex">
        <span> $ {{ getData.price }}</span>
        <v-btn @click="sendCardData" class="card-fixed__price-add depressed" color="#3138b1">
          Add to cart
        </v-btn>
      </v-col>
    </v-row>

  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "FixedComponent",
  computed: {
    ...mapGetters(["getData","getSendData"]),
  },
  methods:{
     sendCardData(){
        console.log(this.getSendData)
    }
  }
};
</script>

<style lang="scss" scoped>
.card-fixed {
  width: 90%;
  height: 110px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 21px !important;
  .v-card-subtitle {
    font-size: 20px !important;
  }
  &__price {
    align-items: center;
    span {
      font-size: 30px !important;
    }
    button.v-btn.v-btn--elevated.v-theme--light.v-btn--density-default.v-btn--size-default.v-btn--variant-elevated.card-fixed__price-add.depressed {
      height: 60px !important;
      font-size: 20px !important;
      padding: 0 25px !important;
      color: white !important;
      margin-left: 20px;
    }
  }
  &__title {
    .v-card-title {
      font-size: 28px !important;
    }
  }
}
</style>
