<template>
  <div id="app">
    <v-app>
      <v-card>
        <v-tabs
          cols=12
          v-model="tab"
          background-color="deep-purple accent-4"
          centered
          dark
          icons-and-text
        >

          <v-tab cols=4 key="0"> What's inside </v-tab>

          <v-tab cols=4 key="1"> Reviews </v-tab>
          <v-tab  cols=4 key="2"> FAQ's </v-tab>
        </v-tabs>
        <v-tabs-items :v-model="tab">
          <v-tab-item v-if="tab === 0">
            <v-card flat>
              <v-card-text>What's inside</v-card-text>
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
    button.v-btn.v-slide-group-item--active.v-tab--selected.v-theme--light.v-btn--density-default.rounded-0.v-btn--size-default.v-btn--variant-text.v-tab{
        width:33.3% !important;
    }
button.v-btn.v-theme--light.v-btn--density-default.rounded-0.v-btn--size-default.v-btn--variant-text.v-tab{        
            width:33.3% !important;

    }

</style>>


