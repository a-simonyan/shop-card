<template>
  <v-card >
    <!-- <v-img
  :lazy-src="getData.defaultImage"
  max-height="750"
  max-width="100%"
  :src="getData.defaultImage"
></v-img> -->
<img :src="getData.defaultImage" alt="#" class="img">
  </v-card>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name:"LeftBlock",
  computed:{
    ...mapGetters(['getData']),
  },
}
</script>
<style lang="scss" scoped>
  .img{
    width:100%;
    height:750px;
  }
</style>
