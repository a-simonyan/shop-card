<template>
  <v-card class="leftBar">
    <v-card-text class="leftBar__top">
      <v-icon class="leftBar__top-menuIcon">mdi-menu</v-icon>
      <v-icon>mdi-magnify</v-icon></v-card-text
    >
    <v-card-text class="leftBar__bottom"
      ><v-icon>mdi-account-outline</v-icon><v-icon>mdi-basket-outline</v-icon>
    </v-card-text>
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
  top: 75px;
  left: 91px;
  width: 140px;
  height: calc(100% - 150px);
  justify-content: &__top, &__bottom {
    font-size: 1.1rem !important;
  }
  &__top {
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
    &-menuIcon {
      margin-top: 15px;
    }
  }
  &__bottom {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 30px;
    margin-bottom: 55px;
    align-items: center;
  }
}

@media (max-width: "1600px") {
  .leftBar {
    left: 80px;
    width: 95px;
  }
}
@media (max-width: "1130px") {
  .leftBar {
    left: 58px;
  }
}
@media (max-width: "820px") {
  .leftBar {
    left: 35px;
  }
}

@media (max-width: "710px") {
  .leftBar {
    left: 35px;
    width: 63px;
  }
}
@media (max-width: "468px") {
  .leftBar {
    left: 23px;
  }
}

@media (max-width: "500px") {
  .leftBar {
    left: 0;
  }
}
</style>
