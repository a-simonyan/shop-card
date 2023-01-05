<template>
  <div class="content col-md-12">
    <div class="content__subtitle col-md-12">
      <v-icon>mdi-arrow-left</v-icon>
      <span>Back to bedroom</span>
    </div>
    <div class="content__title">
      <div class="content__title-subheader">BEDROOM</div>
      <div class="content__title-header">College Essentials</div>
    </div>
    <div class="content__stars">
      <v-rating
        full-icon="$mdiStar"
        half-icon="$mdiStarHalfFull"
        hover
        length="5"
        size="26"
        value="3"
      ></v-rating>
      <span>4.4 328 (reviews)</span>
    </div>
    <div class="content__body">
      <div class="content__body-quality">
        <v-card flat class="py-12">
          <v-card-text>
            <v-row align="center" justify="left">
              <v-col cols="12">
                <p class="text-left">Select Quality</p>
              </v-col>
              <v-btn-toggle v-model="toggle_exclusive_quality" mandatory>
                <v-btn width="200"> Basic </v-btn>
                <v-btn width="200"> Premium </v-btn>
              </v-btn-toggle>
            </v-row>
          </v-card-text>
        </v-card>
      </div>

      <div class="content__body-style">
        <v-card flat class="py-12">
          <v-card-text>
            <v-row align="left" justify="left">
              <v-col cols="12">
                <p class="text-left">Style</p>
              </v-col>
              <v-btn-toggle
                v-model="toggle_exclusive_style"
                mandatory
                class="group-style"
              >
                <v-btn> Minimal </v-btn>
                <v-btn> Bohemian </v-btn>
                <v-btn> Floral </v-btn>
                <v-btn> Other </v-btn>
              </v-btn-toggle>
            </v-row>
          </v-card-text>
        </v-card>
      </div>

      <div class="content__body-color">
        <v-card flat class="py-12">
          <v-card-text>
            <v-row align="left" justify="left">
              <v-col cols="12">
                <p class="text-left">Color</p>
              </v-col>
              <div model="toggle_exclusive_color" mandatory class="group-color">
                <div class="color"></div>
                <div class="color"></div>
                <div class="color"></div>
                <div class="color"></div>
              </div>
            </v-row>
          </v-card-text>
        </v-card>
      </div>
      <div class="content__body-size">
        <v-card flat class="py-12">
          <v-card-text>
            <v-row align="left" justify="left">
              <v-col cols="12">
                <p class="left">Size</p>
              </v-col>
              <v-btn-toggle v-model="toggle_exclusive_size">
                <v-btn> Twin XL </v-btn>
                <v-btn> Full </v-btn>
              </v-btn-toggle>
            </v-row>
          </v-card-text>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toggle_exclusive_quality: 0,
      toggle_exclusive_style: 0,
      toggle_exclusive_size: 0,
      toggle_exclusive_color: undefined,
      tab: null,
        items: [
          { tab: 'One', content: 'Tab 1 Content' },
          { tab: 'Two', content: 'Tab 2 Content' },
          { tab: 'Three', content: 'Tab 3 Content' },
          { tab: 'Four', content: 'Tab 4 Content' },
          { tab: 'Five', content: 'Tab 5 Content' },
          { tab: 'Six', content: 'Tab 6 Content' },
          { tab: 'Seven', content: 'Tab 7 Content' },
          { tab: 'Eight', content: 'Tab 8 Content' },
          { tab: 'Nine', content: 'Tab 9 Content' },
          { tab: 'Ten', content: 'Tab 10 Content' },
        ],
    };
  },
};
</script>

<style lang="scss" scoped>
.content {
  margin-left: 35px;
  border: 2px solid red;
  &__subtitle {
    padding: 30px;
    color: #2020a4;
    font-size: 19px;
    font-weight: 600;
    span {
      margin-left: 15px;
    }
  }
  &__title {
    padding: 30px;
    .content__title-subheader {
      color: #ccc;
      font-size: 21px;
      letter-spacing: 3px;
    }
    .content__title-header {
      font-size: 36px;
      font-weight: 800;
    }
  }
  &__stars {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
    padding: 0 30px;
  }
  &__body {
    &-quality,
    &-size,
    &-style {
      padding: 30px;
      .text-left {
        text-align: left !important;
        font-size: 20px;
        font-weight: 500;
      }
    }
    &-style {
      .group-style {
        .v-btn {
          border-radius: 25px;
        }
      }
    }
    &-color {
      .color {
        width: 75px;
        height: 75px;
        border-radius: 50%;
        background: #2020a4;

      }
      .group-color {
        padding: 30px;
        display: flex;
        gap: 5px;
      }
    }
  }
}
</style>
