import Vue from "vue";
import Vuex from "vuex";

// 为了迎合项目变的庞大 更容易阅读和维护
import personAbout from "./person"
const fruitAbout = {
  namespaced: true,
  state: {
    fruit: "apple"
  },
  actions: {},
  mutations: {}
}


const foodAbout = {
  namespaced: true,
  state: {
    food1: "馒头"
  },
  actions: {},
  mutations: {}
}


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    fruitAbout,
    foodAbout,
    personAbout
  }
})