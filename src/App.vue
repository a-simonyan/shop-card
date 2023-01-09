<template>
  <v-app>
    <v-main>
      <v-row cols="12" class="container">
        <!-- LEftNavbar -->
        <left-nav-bar></left-nav-bar>
        <v-col cols="6" class="leftBlock">
          <left-block></left-block>
        </v-col>
        <v-col cols="5">
          <right-block></right-block>
        </v-col>
        <fixed-component class ="fixed"></fixed-component>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import RightBlock from './components/RightBlock.vue'
import LeftBlock from './components/LeftBlock.vue'
import LeftNavBar from './components/LeftNavBar.vue'

import FixedComponent from './components/FixedComponent.vue'
export default {
  components: { RightBlock, LeftBlock, FixedComponent,LeftNavBar},
  name: 'App',
  data(){
    return{
      propsData: {
        title: "College Essentials",
        subtitle: "BEDROOM",
        quality:{
          title:"Select quality",
          arr:["Basic", "Premium"],
        } ,
        size:{
          title:"Size",
          arr: ["Twin XL", "Full"],
          },
        style:{
          title:"Style",
          arr: ["Minimal", "Bohemian", "Floral", "Other"],
        },
        color:{
          title:"color",
          arr:[{ color: "aqua", img: "" },{ color: "black", img: "" },{ color: "ccc", img: "" },{ color: "white", img: "" }],
        }, 
      },
    }
  },
}
</script>
<style lang="scss" scoped>
.container{
  position:relative;
  .leftBlock{
    margin-left:50px;
  }
  
}

.v-card--variant-elevated{
  box-shadow:none !important;
}

.fixed{
    position: fixed;
    bottom: 55px;
    left: 70px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    box-shadow: -1px -3px 9px #ccc !important
}
</style>