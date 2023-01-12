<template>
  <v-card class="card-fixed flex">
    <v-card-text class="card-fixed__left">
      <v-img
        min-width="60"
        min-height="60"
        class="ml-10 card-fixed__left-image"
        max-height="60"
        max-width="60"
        :src="getSendData.image"
      ></v-img>
      <v-card-text class="card-fixed__title">
        <v-card-title>{{ getData?.title }}</v-card-title>
        <v-card-subtitle> Everything you need for freshman</v-card-subtitle>
      </v-card-text>
    </v-card-text>
    <v-card-text class="card-fixed__center">
      <span class="card-fixed__center-text">Add Ons</span>
      <div class="card-fixed__center-icon">
        <v-icon class="plus_icon">mdi-plus</v-icon>
      </div>
    </v-card-text>
    <v-card-text class="card-fixed__right">
      <v-card-text class="card-fixed__right--price">
        <span> ${{ getData?.price }}</span>
        <v-btn
          @click="sendCardData"
          class="card-fixed__price-add depressed"
          color="#000c8a"
        >
          Add to Cart
        </v-btn>
      </v-card-text>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "FixedComponent",
  computed: {
    ...mapGetters(["getData", "getSendData", "getSuccessRequest"]),
  },
  methods: {
    ...mapActions(["addCardPrice", "postRequestData"]),
    sendCardData() {
      this.addCardPrice({ id: this.getData.id, price: this.getData.price });
      this.postRequestData(this.getSendData);
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
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    .v-card-title {
      font-size: 22px;
    }
  }

  &__left {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  &__center {
    margin-bottom: 15px;
    &-text {
      font-size: 15px !important;
      color: rgba(0, 0, 0, 0.87);
      font-weight: 700;
      margin-left: 1px;
      display: block;
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
  &__right {
    align-items: center;
    display: flex;
    justify-content: center;
    &--price {
      display: flex;
      align-items: center;
      justify-content: right;
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

@media (max-width: "1050px") {
  .card-fixed__price-add {
    width: 150px;
  }
}
@media (max-width: "960px") {
  .card-fixed {
    font-size: 16px !important;

    &__left,
    &__right,
    &__center {
      padding: 0 !important;
    }
    &__left {
      .v-img {
        margin-left: 20px !important;
      }
    }
    &__right {
      span {
        font-size: 16px !important;
      }
    }
    &__center-icon {
      margin-top: 10px;
    }
    &__center-text {
      display: none;
    }
    &__title {
      .v-card-title {
        font-size: 16px !important;
      }
    }
  }
}

@media (max-width: "820px") {
  .card-fixed__left-image {
    display: none;
  }
}
@media (max-width: "710px") {
  .card-fixed__center {
    display: none;
  }
}

@media (max-width: "660px") {
  .card-fixed__title {
    .v-card-subtitle {
      display: none;
    }
    .v-card-title {
      margin-top: 15px;
    }
  }
}

@media (max-width: "430px") {
  .card-fixed{
    display: flex;
    flex-direction: column !important;
  }
  .card-fixed__title{
    height:40px;
  }
  .card-fixed__right{
    margin-top: 15px;
    margin-bottom: 40px;
  }
}
</style>
