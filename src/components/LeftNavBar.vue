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

@media(max-width:"1640px"){
  .leftBar{
    width:100px;
// left:75px;
  }
}
@media(max-width:"1368px"){
  .leftBar{
    width:70px;
  }
}
  @media(max-width:"1063px"){
  .leftBar{
    width:40px;
  }
}
</style>
