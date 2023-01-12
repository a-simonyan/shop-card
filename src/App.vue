<template>
  <v-app>
    <v-main>
      <div class="app-container">
        <div class="main-container">
          <v-row class="card">
            <v-col class="card__left">
              <left-block></left-block>
            </v-col>
            <v-col>
              <right-block></right-block>
            </v-col>
          </v-row>
        </div>
        <left-nav-bar class="leftNavbar"></left-nav-bar>

        <fixed-component class="fixed"></fixed-component>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import RightBlock from "./components/RightBlock.vue";
import LeftBlock from "./components/LeftBlock.vue";
import LeftNavBar from "./components/LeftNavBar.vue";

import FixedComponent from "./components/FixedComponent.vue";
import { mapActions } from "vuex";
export default {
  components: { RightBlock, LeftBlock, FixedComponent, LeftNavBar },
  name: "App",
  async created() {
    await this.getFetchRequestData();
  },
  methods: {
    ...mapActions(["getFetchRequestData"]),
  },
};
</script>
<style lang="scss" scoped>
body {
  overflow-y: hidden;
  height: 100vh;
}

.app-container {
  width: 100%;
  height: 100vh;
  background: url("@/assets/background.png");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 75px 0;
}
.main-container {
  width: 90%;
  height: 100%;
  margin: 0 auto;
  background: white;
  position: relative;
  overflow: scroll;
  overflow-x: hidden;
}

.card {
  width: calc(100% - 50px);
  margin-left: 40px;
}

.v-card--variant-elevated {
  box-shadow: none !important;
}

.fixed {
  position: fixed;
  width: 77% !important;
  bottom: 12%;
  left: 12%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px !important;
}

::-webkit-scrollbar {
  display: none;
}

@media (max-width: "960px") {
  .fixed {
    left: 15%;
  }
}

@media (max-width: "710px") {
  .card {
    margin-left: 25px;
  }
}

@media (max-width: "768px") {
  .main-container {
    width: 100%;
  }
  .app-container {
    padding: 0;
  }
  .leftNavbar {
    top: 0;
    left: 0;
  }
  .fixed {
    width: 100% !important;
    left: 0;
    bottom: 0;
  }
}

@media (max-width: "500px") {
  .leftNavbar {
    position: fixed;
    height: unset;
    width: unset;
    display: flex;
    flex-direction: row;
    top: 0;
    left: 0;
    &__top,
    &__bottom {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    margin-bottom: 0;
  }
}
</style>
