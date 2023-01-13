import { createStore } from "vuex";

export default createStore({
  state: {
    data: null,
    loading: false,
    sendData: {
      id: undefined,
      price: undefined,
      quality: undefined,
      style: undefined,
      title: undefined,
      size: undefined,
      color:undefined,
    },
    success_request:false
  },
  getters: {
    getData: (state) => state.data,
    getSendData: (state) => state.sendData,
    getDataLoading: (state) => state.loading,
    getSuccessRequest: state => state.getSuccessRequest,
  },
  mutations: {
    SET_CHANGE_QUALITY: (state, payload) => (state.sendData.quality = payload),
    SET_CHANGE_STYLE: (state, payload) => (state.sendData.style = payload),
    SET_CHANGE_SIZE: (state, payload) => (state.sendData.size = payload),
    SET_CARD_PRICE: (state, { id, price }) => {
      (state.sendData.id = id), (state.sendData.price = price);
    },
    SET_CHANGE_IMG: (state, payload) => (state.sendData.image = payload),
    GET_ASYNC_DATA: (state, payload) => (state.data = payload),
    GET_DATA_LOADING: (state, status) => (state.loading = status),
    SET_SUCCESS_REQUEST: (state) => (state.success_request = true),
    SET_FAILURE_REQUEST: (state) => (state.success_request = false),
  },
  actions: {
    getFetchRequestData: ({ commit }) => {
      commit("GET_DATA_LOADING", true);
      fetch("http://127.0.0.1:8000/api/products")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data[0], "Actions");
          commit("GET_ASYNC_DATA", data[0]);
        })
        .finally(() => {
          commit("GET_DATA_LOADING", false);
        });
    },
    postRequestData: ({ commit }, data) => {
      const r = fetch("http://127.0.0.1:8000/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => {
        res.status === 200
          ? commit("SET_SUCCESS_REQUEST")
          : commit("SET_FAILURE_REQUEST");
      });
      console.log(r);
    },
    changeQuality: ({ commit }, payload) => {
      commit("SET_CHANGE_QUALITY", payload);
    },
    changeStyle: ({ commit }, payload) => {
      commit("SET_CHANGE_STYLE", payload);
    },
    changeSize: ({ commit }, payload) => {
      commit("SET_CHANGE_SIZE", payload);
    },
    addCardPrice: ({ commit }, payload) => {
      commit("SET_CARD_PRICE", payload);
    },
    changeImg: ({ commit }, payload) => {
      commit("SET_CHANGE_IMG", payload);
    },
  },
  modules: {},
});
