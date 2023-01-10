<template>
  <v-card class="card-fixed flex">
    <v-row class="flex">
      <v-col cols="4">
        <v-card-text class="card-fixed__left">
          <v-img
            class="ml-10"
            max-height="60"
            max-width="60"
            :src="getSendData.image"
          ></v-img>
          <v-card-text class="card-fixed__title">
            <v-card-title>{{ getData.title }}</v-card-title>
            <v-card-subtitle> Everything you need for freshman</v-card-subtitle>
          </v-card-text>
        </v-card-text>
      </v-col>
      <v-col cols="8">
        <v-card-text class="card-fixed__right">
          <v-card-text class="card-fixed__right--addOns">
            <span class="card-fixed__right--addOns-text">Add Ons</span>
            <div class="card-fixed__right--addOns-icon">
              <v-icon class="plus_icon">mdi-plus</v-icon>
            </div>
          </v-card-text>
          <v-card-text class="card-fixed__right--price">
            <span> ${{ getData.price }}</span>
            <v-btn
              @click="sendCardData"
              class="card-fixed__price-add depressed"
              color="#000c8a"
            >
              Add to Cart
            </v-btn>
          </v-card-text>
        </v-card-text>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "FixedComponent",
  computed: {
    ...mapGetters(["getData", "getSendData"]),
  },
  methods: {
    sendCardData() {
      console.log(this.getSendData);
    },
  },
};
</script>

<style lang="scss" scoped>
.card-fixed {
  width: 87%;
  height: 110px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 21px !important;
  &__title {
    margin-bottom: 18px;
    .v-card-title {
      font-size: 22px;
    }
  }
  // &__addOns {
  //   &-text {
  //     font-size: 15px !important;
  //     color: rgba(0, 0, 0, 0.87);
  //     font-weight: 700;
  //     margin-left: 1px;
  //   }
  //   &-icon {
  //     .plus_icon {
  //       font-size: 22px;
  //       margin-left: 1px;
  //       margin-top: 6px;
  //       color: #ccc;
  //       border: 1px solid #ccc;
  //       padding: 20px;
  //       border-radius: 3px;
  //     }
  //   }
  // }
  &__left {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  &__right {
    align-items: center;
    display: flex;
    justify-content: center;
    &--price {
      display: flex;
      align-items: center;
      justify-content: right;
    }
    &--addOns {
      margin-bottom: 15px;
      &-text {
        font-size: 15px !important;
        color: rgba(0, 0, 0, 0.87);
        font-weight: 700;
        margin-left: 1px;
      }
      &-icon {
        .plus_icon {
          font-size: 22px;
          margin-left: 1px;
          margin-top: 6px;
          color: #ccc;
          border: 1px solid #ccc;
          padding: 20px;
          border-radius: 3px;
        }
      }
    }

    &-add {
      text-transform: initial !important;
    }
    span {
      font-size: 26px;
    }

    button.v-btn.v-btn--elevated.v-theme--light.v-btn--density-default.v-btn--size-default.v-btn--variant-elevated.card-fixed__price-add.depressed {
      height: 45px !important;
      font-size: 15px !important;
      padding: 0 50px !important;
      color: white !important;
      margin-left: 20px;
      font-weight: 700;
    }
  }
}
</style>
