<template>
  <v-card flat class="card" :style="cssVars">
    <v-card-text class="card__header">
      <v-icon size="16">mdi-arrow-left</v-icon>
      <span>Back to bedroom</span>
    </v-card-text>
    <v-card-subtitle class="card__subtitle px-4">
      <span>{{ getData?.subtitle }}</span>
    </v-card-subtitle>
    <v-card-title class="card__title px-4"
      ><span>{{ getData?.title }}</span></v-card-title
    >

    <v-card-text class="card__stars">
      <v-rating
        v-model="rating"
        background-color="yellow lighten-3"
        color="yellow"
        large
        hover
        length="5"
        size="26"
        value="3"
      ></v-rating>
      <span>4.0 (328 reviews)</span>
    </v-card-text>
    <v-card-text class="card__quality">
      <v-row>
        <v-col cols="12" sm="12">
          <p>{{ getData?.quality.title }}</p>

          <v-btn-toggle v-model="toggle_quality">
            <v-btn
              v-for="item in getData?.quality.arr"
              :key="item"
              @click="getQualityThing"
              >{{ item }}
            </v-btn>
          </v-btn-toggle>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-text class="card__style">
      <v-col cols="12" sm="12" class="card__color-title">
        <p>{{ getData?.style.title }}</p>
      </v-col>

      <v-btn-toggle v-model="toggle_style" class="d-flex flex-wrap">
        <v-btn
          v-for="item in getData?.style.arr"
          :key="item"
          @click="getStyleThing"
          >{{ item }}
        </v-btn>
      </v-btn-toggle>
    </v-card-text>

    <v-card-text class="card__color">
      <v-row>
        <v-col cols="12" sm="12" class="card__color-title">
          <p>{{ getData?.color.title }}</p>
        </v-col>

        <v-btn-toggle v-model="toggle_color" class="btn-toggle">
          <v-btn
            v-for="(item, i) in getData?.color.arr"
            :key="i"
            @click="getColorThing"
            :class="'btn' + i"
          ></v-btn>
        </v-btn-toggle>
      </v-row>
    </v-card-text>

    <v-card-text class="card__size">
      <v-row>
        <v-col cols="12" sm="12">
          <p>{{ getData?.size.title }}</p>
          <v-btn-toggle v-model="toggle_size">
            <v-btn
              rounded
              v-for="item in getData?.size.arr"
              :key="item"
              @click="getSizeThing"
              >{{ item }}
            </v-btn>
          </v-btn-toggle>
        </v-col>
      </v-row>
    </v-card-text>

    <v-card-text>
      <tab-component></tab-component>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import TabComponent from "./TabComponent.vue";
export default {
  name: "RightBlock",
  components: {
    TabComponent,
  },
  data() {
    return {
      colors: [],
      rating: 4,
      toggle_quality: undefined,
      toggle_size: undefined,
      toggle_style: undefined,
      toggle_color: 0,
    };
  },
  computed: {
    ...mapGetters(["getData", "getDataLoading", "getSendData"]),
    getColorThing() {
      if (this.toggle_color !== undefined) {
        this.changeImg(this.getData.color.arr[this.toggle_color].img);
        this.changeColor(this.getData.color.arr[this.toggle_color].color)
      }
    },
    getQualityThing() {
      this.changeQuality(this.getData.quality.arr[this.toggle_quality]);
    },
    getStyleThing() {
      console.log("style")
      this.changeStyle(this.getData.style.arr[this.toggle_style]);
    },
    getSizeThing() {
      console.log("size")
      this.changeSize(this.getData.size.arr[this.toggle_size]);
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
    ...mapActions(["changeQuality", "changeSize", "changeStyle", "changeImg","changeColor"]),
  },
  watch: {
    getDataLoading(v) {
      if (!v) {
        this.changeImg(this.getData.color.arr[0].img);
        this.changeColor(this.getData.color.arr[0].color)
        this.colors = this.getData.color.arr.map((i) => i.color);
      }
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
  margin-bottom: 5px;
  p {
    font-weight: 600;
    margin-bottom: 10px;
  }
  &__header {
    font-size: 0.875rem;
    display: flex;
    flex-direction: row;
    gap: 5px;
    align-items: center;
    font-weight: 600;
    color: #3138b1;
    margin-top: 18px;
    padding-bottom: 0 !important;
  }
  &__title {
    padding: 8px 0 30px 0;
    font-size: 36px;
    font-weight: 800;
    text-transform: initial !important;
    display: flex;
    flex-wrap: wrap;
  }

  &__subtitle {
    padding: 30px 0 0 0;
    letter-spacing: 3px;
    font-size: 17px;
    margin-bottom: 0;
    text-transform: uppercase;
  }

  &__stars {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
    flex-wrap: wrap;
  }
  &__quality {
    font-size: 20px;
    font-weight: 500;
    margin-top: 15px;
    button {
      margin-top: 15px;
    }
    .v-btn-group.v-theme--light.v-btn-group--density-default.v-btn-toggle {
      display: flex;
      flex-wrap: wrap;
    }
    .v-btn-group--density-default.v-btn-group {
      height: auto !important;
    }
    .v-btn.v-btn--flat.v-theme--light.v-btn--density-default.v-btn--size-default.v-btn--variant-elevated {
      border: 1px solid #ccc;
      padding: 0 60px;
      letter-spacing: 0;
      text-transform: initial !important;
      height: 48px !important;
    }
  }

  &__size,
  &__style {
    font-size: 20px;
    font-weight: 500;
    .v-btn-group--density-default.v-btn-group {
      height: auto !important;
    }
    .v-btn.v-btn--flat.v-theme--light.v-btn--density-default.v-btn--size-default.v-btn--variant-elevated {
      border: 1px solid #ccc;
      border-radius: 30px;
      letter-spacing: 0;
      text-transform: initial !important;
      padding: 0 40px;
      height: 40px !important;
    }
    .v-btn-toggle {
      flex-wrap: wrap;
      gap: 15px;
    }
  }
  .v-btn-group--density-default.v-btn-group {
    height: auto !important;
  }
  &__color {
    &-title {
      padding-bottom: 0 !important;
    }
    p {
      font-size: 20px;
      font-weight: 600;
    }
    .v-btn--size-default {
      min-width: 48px !important;
      min-height: 48px !important;
    }
  }
}

.btn-toggle {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  padding-left: 12px;
  p {
    padding-bottom: 0px;
  }
  button {
    border-radius: 45px !important;
    opacity: 1 !important;

    &:after {
      border-radius: 45px !important;
      border: 1px solid inherit !important;
      opacity: 0;
    }
    :hover {
      border: 1px solid #ccc !important;
    }
  }

  button.v-btn.v-btn--active.v-btn--flat.v-theme--light.v-btn--density-default.v-btn--size-default.v-btn--variant-elevated {
    border: 2px solid #ccc;
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
    opacity: 1 !important;
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
    opacity: 1 !important;
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
    opacity: 1 !important;
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
    opacity: 1 !important;
  }
}

@media (max-width: "510px") {
  .card__title {
    font-size: 25px;
  }
}

@media (max-width: "390px") {
  .card__title {
    font-size: 20px;
  }
}
</style>
