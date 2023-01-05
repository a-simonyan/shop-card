<template>
  <v-app width="70">
    <v-app-bar app color="white" dark>
      <v-app-bar-nav-icon @click="drawer = true"> </v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary width="70">
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Account</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>
<style lang="scss">
    .v-app-bar.v-toolbar:not(.v-toolbar--flat){
        box-shadow: none;
    }
    .v-toolbar.v-toolbar--density-default.bg-white.v-theme--light.v-app-bar{
        width:70px !important;
        top:30px !important;
        left:40px !important;
        .v-toolbar__content{
            width: 70px !important;
        }
    }
    .v-navigation-drawer.v-navigation-drawer--left.v-navigation-drawer--temporary.v-navigation-drawer--active.v-theme--light{
        top:94px !important;
        left: 0 !important;
        width: 110px !important;
    }
    .v-navigation-drawer__scrim{
        background: #ffffff !important;
    }
</style>