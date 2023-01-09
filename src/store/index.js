import { createStore } from 'vuex'

export default createStore({
  state: {
    data:{
        title: "College Essentials",
        subtitle: "BEDROOM",
        price:195,
        defaultImage:"https://www.armani.com/variants/images/17411127375785016/F/w350.jpg",
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
          title:"Color",
          arr:[{ color: "aqua", img: "https://www.armani.com/variants/images/17411127375785016/F/w350.jpg" },
          { color: "black", img: "https://www.armani.com/variants/images/17411127375785024/D/w400.jpg" },
          { color: "#ccc", img: "https://www.armani.com/variants/images/17411127375785025/F/w400.jpg" },
          { color: "#ffffff", img: "https://www.armani.com/variants/images/17411127375893613/D/w350.jpg" }],
        }, 
      },
      sendData:{
        stars: undefined,
        quality: undefined,
        style: undefined,
        color: undefined,
        size: undefined,
      },
  },
  getters: {
    getData: (state) => state.data,
    getSendData:(state) => state.sendData
  },
  mutations: {
    SET_CHANGE_QUALITY:(state,payload) => state.sendData.quality = payload ,
    SET_CHANGE_STYLE:(state,payload) => state.sendData.style = payload ,
    SET_CHANGE_SIZE:(state,payload) => state.sendData.size = payload ,
    SET_CHANGE_TITLE:(state,payload) => state.sendData.title = payload ,
    SET_CHANGE_IMG:(state,payload) => state.data.defaultImage = payload,
    SET_CHANGE_COLOR:(state,payload) => state.sendData.color = payload

  },
  actions: {
    changeQuality : ({commit},payload) => {
      commit("SET_CHANGE_QUALITY",payload)
    } ,
    changeStyle:({commit},payload) => {
      commit("SET_CHANGE_STYLE",payload)
    } ,
    changeSize:({commit},payload) => {
      commit("SET_CHANGE_SIZE",payload)
    } ,
    changeTitle:({commit},payload) => {
      commit("SET_CHANGE_TITLE",payload)
    },
    changeImg:({commit,state},payload) => {
      if(state.defaultImage === payload){
        return
      }
      commit("SET_CHANGE_IMG",payload)
    },
    changeColor:({commit},payload) => {
      commit('SET_CHANGE_COLOR',payload)
    }
  },
  modules: {
  }
})