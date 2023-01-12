<template>
  <v-card class="card">
    <img :src="getSendData.image" alt="#" class="img" />
    <!-- <v-img :src="getSendData.image" width="100%" heigh="620"></v-img> -->
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "LeftBlock",
  data() {
    return {
      defaultImage: undefined,
    };
  },
  computed: {
    ...mapGetters(["getSendData",'getData']),
  },
  mounted(){
    console.log(this.getSendData,"getsenddata")
    console.log(this.getData,"getData")
  }
};
</script>
<style lang="scss" scoped>
.card {
  width: 100%;
  max-height: 620px;
}
.img {
  max-width: 100%;
  height: auto;
}
.v-card.v-theme--light.v-card--density-default.v-card--variant-elevated {
  border-radius: 0px !important ;
}
</style>
