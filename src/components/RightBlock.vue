<template>
  <v-card flat class="card" :style="cssVars">
    <v-card-text class="card__header">
      <v-icon>mdi-arrow-left</v-icon>
      <span>Back to Bedroom</span>
    </v-card-text>
    <v-card-subtitle class="card__subtitle px-4">{{
      getData.subtitle
    }}</v-card-subtitle>
    <v-card-title class="card__title px-4">{{ getData.title }}</v-card-title>

    <v-card-text class="card__stars">
      <v-rating
        full-icon="$mdiStar"
        half-icon="$mdiStarHalfFull"
        hover
        length="5"
        size="26"
        value="3"
      ></v-rating>
      <span>4.4 328 (reviews)</span>
    </v-card-text>
    <!-- quality -->
    <v-card-text class="card__quality">
      <v-row>
        <v-col cols="12" sm="12">
          <p>{{ getData.quality.title }}</p>

          <v-btn-toggle v-model="toggle_quality">
            <v-btn
              v-for="item in getData.quality.arr"
              :key="item"
              @click="getQualityThing"
              >{{ item }}
            </v-btn>
          </v-btn-toggle>
        </v-col>
      </v-row>
    </v-card-text>
    <!-- style -->
    <v-card-text class="card__style">
      <v-row>
        <v-col cols="12" sm="12">
          <p>{{ getData.style.title }}</p>
          <v-btn-toggle v-model="toggle_style">
            <v-btn
              v-for="item in getData.style.arr"
              :key="item"
              @click="getStyleThing"
              >{{ item }}
            </v-btn>
          </v-btn-toggle>
        </v-col>
      </v-row>
    </v-card-text>
    <!-- /* color */ -->

    <v-card-text>
      <v-row>
        <v-col cols="12" sm="12">
          <p>{{ getData.color.title }}</p>
        </v-col>
        <!-- <div v-for="(item,index) in getData.color.arr" :key="index" class="btn-toggle">
          <button @click="getColorThing" :class='"btn-"+index'></button>
        </div> -->
        <v-btn-toggle v-model="toggle_color" class="btn-toggle">
          <v-btn
            v-for="(item, i) in getData.color.arr"
            :key="i"
            @click="getColorThing"
            :class="'btn' + i"
          ></v-btn>
        </v-btn-toggle>
      </v-row>
    </v-card-text>

    <!-- /* size */ -->
    <v-card-text class="card__size">
      <v-row>
        <v-col cols="12" sm="12">
          <p>{{ getData.size.title }}</p>
          <v-btn-toggle v-model="toggle_size">
            <v-btn
              rounded
              v-for="item in getData.size.arr"
              :key="item"
              @click="getSizeThing"
              >{{ item }}
            </v-btn>
          </v-btn-toggle>
        </v-col>
      </v-row>
    </v-card-text>

    <!-- /* comments */ -->
    <v-card-text>
      <tab-component></tab-component>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
import TabComponent from "./TabComponent.vue";
export default {
  name: "RightBlock",
  components: {
    TabComponent,
  },
  created() {
    this.colors = this.getData.color.arr.map((i) => i.color);
    console.log(this.colors[0]);
  },
  data() {
    return {
      colors: [],
      toggle_quality: undefined,
      toggle_size: undefined,
      toggle_style: undefined,
      toggle_color: 0,
    };
  },

  computed: {
    ...mapGetters(["getData", "getSendData"]),
    getColorThing() {
      this.changeImg(this.getData.color.arr[this.toggle_color].img),
        this.changeColor(this.getData.color.arr[this.toggle_color].color);
    },
    getQualityThing() {
      this.changeQuality(this.getData.quality.arr[this.toggle_quality]);
    },
    getSizeThing() {
      this.changeStyle(this.getData.size.arr[this.toggle_size]);
    },
    getStyleThing() {
      this.changeSize(this.getData.style.arr[this.toggle_style]);
    },
    cssVars() {
      return {
        "--bg-color-0": this.colors[0],
        "--bg-color-1": this.colors[1],
        "--bg-color-2": this.colors[2],
        "--bg-color-3": this.colors[3],
      };
    },
  },
  methods: {
    ...mapActions([
      "changeQuality",
      "changeSize",
      "changeStyle",
      "changeImg",
      "changeColor",
    ]),
    cssVars() {
      return {};
    },
  },
};
</script>

<style lang="scss" scoped>
$btn-color0: var(--bg-color-0);
$btn-color1: var(--bg-color-1);
$btn-color2: var(--bg-color-2);
$btn-color3: var(--bg-color-3);

.card {
  margin-left: 35px;
  p {
    font-weight: 600;
    margin-bottom: 10px;
  }
  &__header {
    font-size: 19px;
    display: flex;
    flex-direction: row;
    gap: 5px;
    align-items: center;
    font-weight: 600;
    color: #3138b1;
    margin-bottom: 20px;
  }
  &__title {
    padding: 8px 0 30px 0;
    font-size: 36px;
    font-weight: 800;
    text-transform: initial !important;
  }
  &__subtitle {
    padding: 30px 0 0 0;
    letter-spacing: 3px;
    font-size: 21px;
    margin-bottom: 0;
    text-transform: uppercase;
  }

  &__stars {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
  }
  &__quality {
    font-size: 20px;
    font-weight: 500;
    margin-top: 15px;
    .v-btn-group.v-theme--light.v-btn-group--density-default.v-btn-toggle {
      height: 50px !important;
    }
    .v-btn.v-btn--flat.v-theme--light.v-btn--density-default.v-btn--size-default.v-btn--variant-elevated {
      border: 1px solid #ccc;
      padding: 0 60px;
      letter-spacing: 0;
      text-transform: initial !important;
    }
  }

  &__size,
  &__style {
    font-size: 20px;
    font-weight: 500;
    .v-btn-group.v-theme--light.v-btn-group--density-default.v-btn-toggle {
      height: 45px !important;
    }

    .v-btn.v-btn--flat.v-theme--light.v-btn--density-default.v-btn--size-default.v-btn--variant-elevated {
      border: 1px solid #ccc;
      border-radius: 30px;
      margin-right: 8px;
      letter-spacing: 0;
      text-transform: initial !important;
      padding: 0 40px;
    }
  }
}

.btn-toggle {
  display: flex;
  gap: 15px;
  background: #F6F6FA !important;
  button {
    border-radius: 45px !important;
    opacity: 1 !important;
    border: 1px solid inherit !important;

    &:after {
      border-radius: 45px !important;
      border: 1px solid inherit !important;
      opacity: 0;
    }
  }
  /*btn-0*/
  .btn0 {
    color: $btn-color0;
  }
  button.v-btn.v-btn--active.v-btn--flat.v-theme--light.v-btn--density-default.v-btn--size-default.v-btn--variant-elevated.btn0 {
    background: $btn-color0 !important;
    opacity: 1 !important;
  }
  button.v-btn.v-btn--active.v-btn--flat.v-theme--light.v-btn--density-default.v-btn--size-default.v-btn--variant-elevated.btn0::after {
    background: $btn-color0 !important;
    opacity: 1 !important;
  }
  button.v-btn.v-btn--flat.v-theme--light.v-btn--density-default.v-btn--size-default.v-btn--variant-elevated.btn0 {
    background: $btn-color0 !important;
    opacity: 0.65 !important;
  }
  /*btn-1*/
  .btn1 {
    color: $btn-color1;
  }
  button.v-btn.v-btn--active.v-btn--flat.v-theme--light.v-btn--density-default.v-btn--size-default.v-btn--variant-elevated.btn1 {
    background: $btn-color1 !important;
    opacity: 1 !important;
  }
  button.v-btn.v-btn--active.v-btn--flat.v-theme--light.v-btn--density-default.v-btn--size-default.v-btn--variant-elevated.btn1::after {
    background: $btn-color1 !important;
    opacity: 1 !important;
  }
  button.v-btn.v-btn--flat.v-theme--light.v-btn--density-default.v-btn--size-default.v-btn--variant-elevated.btn1 {
    background: $btn-color1 !important;
    opacity: 0.65 !important;
  }
  /*btn-2*/
  .btn2 {
    color: $btn-color2;
  }
  button.v-btn.v-btn--active.v-btn--flat.v-theme--light.v-btn--density-default.v-btn--size-default.v-btn--variant-elevated.btn2 {
    background: $btn-color2 !important;
    opacity: 1 !important;
  }
  button.v-btn.v-btn--active.v-btn--flat.v-theme--light.v-btn--density-default.v-btn--size-default.v-btn--variant-elevated.btn2::after {
    background: $btn-color2 !important;
    opacity: 1 !important;
  }
  button.v-btn.v-btn--flat.v-theme--light.v-btn--density-default.v-btn--size-default.v-btn--variant-elevated.btn2 {
    background: $btn-color2 !important;
    opacity: 0.65 !important;
  }
  /*btn-3*/
  .btn3 {
    color: $btn-color3;
  }
  button.v-btn.v-btn--active.v-btn--flat.v-theme--light.v-btn--density-default.v-btn--size-default.v-btn--variant-elevated.btn3 {
    background: $btn-color3 !important;
    opacity: 1 !important;
  }
  button.v-btn.v-btn--active.v-btn--flat.v-theme--light.v-btn--density-default.v-btn--size-default.v-btn--variant-elevated.btn3::after {
    background: $btn-color3 !important;
    opacity: 1 !important;
  }
  button.v-btn.v-btn--flat.v-theme--light.v-btn--density-default.v-btn--size-default.v-btn--variant-elevated.btn3 {
    background: $btn-color3 !important;
    opacity: 0.65 !important;
  }
}
</style>
