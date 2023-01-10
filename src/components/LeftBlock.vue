<template>
  <v-card>
    <img :src="getSendData.image" alt="#" class="img" />
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
    ...mapGetters(["getSendData"]),
  },

};
</script>
<style lang="scss" scoped>
.img {
  width: 100%;
  height: 750px;
}
</style>
