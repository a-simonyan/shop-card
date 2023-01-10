<template>
  <v-card class="leftBar">
    <v-card-text class="leftBar__top">
      <v-icon>mdi-currency-eth</v-icon>
      <v-icon>mdi-magnify</v-icon></v-card-text
    >
    <v-card-text class="leftBar__bottom"
      ><v-icon>mdi-account-outline</v-icon
      ><v-icon>mdi-basket-outline</v-icon></v-card-text
    >
  </v-card>
</template>

<script>
export default {
  name: "LeftNavBar",
};
</script>

<style lang="scss" scoped>
.leftBar {
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 0;
  left: 0;
  width: 50px;
  height: 100%;
  justify-content: space-between;
  &__top,
  &__bottom {
    font-size: 1.1rem !important;
  }
  &__bottom {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 30px;
    margin-bottom: 55px;
  }
}
</style>
