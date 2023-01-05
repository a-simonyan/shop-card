<template>
  <v-app>
    <v-main>
       <v-container-fluid class="grey lighten-5">
        <v-row no-gutters cols=12>
          <v-col
            cols="6"
          >
            <image-component class="leftBlock col-12"></image-component>
          </v-col>
           <v-col
            cols="6"
          >
            <right-block class="rightBlock col-12"></right-block>
          </v-col>
        </v-row>
      </v-container-fluid>
      <!-- <left-nav-bar></left-nav-bar> -->
    </v-main>
  </v-app>
</template>

<script>
import LeftNavBar from "./components/LeftNavBar.vue";
import RightBlock from "./components/RightBlock.vue";
import ImageComponent from "./components/ImageComponent";

export default {
  name: "App",
  
  components: {
    LeftNavBar,
    RightBlock,
    ImageComponent,
  },
};
</script>
<style lang="scss">
   .content{
    display: block;
    flex-direction: row;
   }
   
</style>