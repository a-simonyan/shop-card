<template>
  <div id="app">
    <v-app>
      <v-card>
        <v-tabs
          cols="12"
          v-model="tab"
          background-color="deep-purple accent-4"
          centered
          dark
          class="tab"
        >
          <v-tab cols="4" key="0"> What's Inside </v-tab>
          <v-tab cols="4" key="1"> Reviews </v-tab>
          <v-tab cols="4" key="2"> FAQ's </v-tab>
        </v-tabs>
        <v-tabs-items :v-model="tab">
          <v-tab-item v-if="tab === 0" class="inside">
            <v-card-title class="inside__title"
              >Customizable Items</v-card-title
            >
            <v-card flat class="inside__item">
              <v-row>
                <v-col class="inside__item-img">
                  <v-img
                    width="215"
                    height="215"
                    src="https://www.togas.com/media/catalog/product/cache/1512aade760a85cd99082ae563244eb8/A/S/ASTIER_DC_PLLW_LS_HRZNTL_82f4.jpg"
                  >
                  </v-img>
                </v-col>
                <v-col class="inside__item--text">
                  <div class="inside__item--text-titleBlock">
                    <v-card-title class="first">Decorative pillow</v-card-title>
                    <v-card-title class="second"
                      >See product details</v-card-title
                    >
                  </div>
                  <v-btn>$80</v-btn>
                </v-col>
              </v-row>
              <v-row>
                <v-col class="inside__item-img">
                  <v-img
                    width="215"
                    height="215"
                    src="https://www.togas.com/media/catalog/product/cache/1512aade760a85cd99082ae563244eb8/_/1/_1_23_12_8a1a.jpg"
                  >
                  </v-img>
                </v-col>
                <v-col class="inside__item--text">
                  <div class="inside__item--text-titleBlock">
                    <v-card-title class="first">Throw KEISON </v-card-title>
                    <v-card-title class="second"
                      >See product details</v-card-title
                    >
                  </div>
                  <v-btn>$700</v-btn>
                </v-col>
              </v-row>
            </v-card>
          </v-tab-item>
          <v-tab-item v-if="tab === 1">
            <v-card flat>
              <v-card-text>Reviews</v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item v-if="tab === 2">
            <v-card flat>
              <v-card-text>FAQ's</v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </v-app>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: 0,
    };
  },
};
</script>

<style lang="scss">
.v-tab--selected {
  .v-tab__slider {
    color: rgb(0, 12, 138) !important;
  }
}
button.v-btn.v-slide-group-item--active.v-tab--selected.v-theme--light.v-btn--density-default.rounded-0.v-btn--size-default.v-btn--variant-text.v-tab {
  width: 33.3% !important;
}
button.v-btn.v-theme--light.v-btn--density-default.rounded-0.v-btn--size-default.v-btn--variant-text.v-tab {
  width: 33.3% !important;
}

button.v-btn.v-theme--light.v-btn--density-default.rounded-0.v-btn--size-default.v-btn--variant-text.v-tab {
  .v-btn__content {
    text-transform: initial !important;
  }
}
.inside {
  &__title {
    padding-left: 0 !important;
    margin: 25px 0 15px 0;
    font-size: 0.875rem;
  }
  &__item {
    align-items: center;
    &-img {
      max-width: 215px;
      max-height: 215px;
    }
    &--text {
      .first {
        font-size: 0.875rem !important;
      }
      .second {
        font-size: 0.875rem !important;
        font-weight: 400 !important;
        cursor: pointer;
      }
      button {
        margin-top: 50px;
        margin-left: 16px;
        padding: 0px 75px;
      }
    }
  }
}
@media (max-width: "1100px") {
  .inside__item--text {
    button {
      padding: 0px 35px;
    }
  }
  .inside__item-img {
    min-width: 170px !important;
    max-height: 150px;
  }
  .inside__item--text {
    padding-top: 0;
    button {
      margin-top: 0;
    }
  }
}
</style>
