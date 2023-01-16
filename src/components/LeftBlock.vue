<template>
  <v-card class="card">
    <img :src="getDefaultImg" alt="#" class="img" />
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
    ...mapGetters(["getSendData", "getData", "getDefaultImg"]),
  },
};
</script>
<style lang="scss" scoped>
.card {
  width: 100%;
  max-height: 620px;
  min-width: 350px;
}
.img {
  max-width: 100%;
  height: auto;
}
.v-card.v-theme--light.v-card--density-default.v-card--variant-elevated {
  border-radius: 0px !important ;
}

@media (max-width: "425px") {
  .card {
    min-width: unset;
  }
}
</style>
