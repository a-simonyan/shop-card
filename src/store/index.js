import { createStore } from 'vuex'

export default createStore({
  state: {
    data: {
      title: "College Essentials",
      subtitle: "BEDROOM",
      price: 195,
      quality: {
        title: "Select quality",
        arr: ["Basic", "Premium"],
      },
      size: {
        title: "Size",
        arr: ["Twin XL", "Full"],
      },
      style: {
        title: "Style",
        arr: ["Minimal", "Bohemian", "Floral", "Other"],
      },
      color: {
        title: "Color",
        arr: [
          {
            color: "#c2b3af",
            // img: "https://www.armani.com/variants/images/17411127375785016/F/w350.jpg",
            img: "https://www.togas.com/media/catalog/product/cache/1512aade760a85cd99082ae563244eb8/N/O/NOES_BL_VRTCL_A_3b5e.jpg",
          },
          {
            color: "#ebebeb",
            // img: "https://www.armani.com/variants/images/17411127375785024/D/w400.jpg",
            img: "https://www.togas.com/media/catalog/product/cache/1512aade760a85cd99082ae563244eb8/_/1/_1__4_9_4c93.jpg",
          },
          {
            color: "#957c6d",
            // img: "https://www.armani.com/variants/images/17411127375785025/F/w400.jpg",
            img: "https://www.togas.com/media/catalog/product/cache/1512aade760a85cd99082ae563244eb8/S/H/SHALTON_BL_VRTCL_63a1.jpg",
          },
          {
            color: "#6c1627",
            // img: "https://www.armani.com/variants/images/17411127375893613/D/w350.jpg",
            img: "https://www.togas.com/media/catalog/product/cache/1512aade760a85cd99082ae563244eb8/M/I/MIDARIA_AD_01_1920x1080_3198.jpg",
          },
        ],
      },
    },
    sendData: {
      image: undefined,
      quality: undefined,
      style: undefined,
      title: undefined,
      size: undefined,
    },
  },
  getters: {
    getData: (state) => state.data,
    getSendData: (state) => state.sendData,
  },
  mutations: {
    SET_CHANGE_QUALITY: (state, payload) => (state.sendData.quality = payload),
    SET_CHANGE_STYLE: (state, payload) => (state.sendData.style = payload),
    SET_CHANGE_SIZE: (state, payload) => (state.sendData.size = payload),
    SET_CHANGE_TITLE: (state, payload) => (state.sendData.title = payload),
    SET_CHANGE_IMG: (state, payload) => (state.sendData.image = payload),
  },
  actions: {
    changeQuality: ({ commit }, payload) => {
      commit("SET_CHANGE_QUALITY", payload);
    },
    changeStyle: ({ commit }, payload) => {
      commit("SET_CHANGE_STYLE", payload);
    },
    changeSize: ({ commit }, payload) => {
      commit("SET_CHANGE_SIZE", payload);
    },
    changeTitle: ({ commit }, payload) => {
      commit("SET_CHANGE_TITLE", payload);
    },
    changeImg: ({ commit }, payload) => {
      commit("SET_CHANGE_IMG", payload);
    },
  },
  modules: {},
});