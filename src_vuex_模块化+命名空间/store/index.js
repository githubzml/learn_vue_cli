import Vue from "vue";

import Vuex from "vuex";
const actions = {
  // jia(context, value) {
  //   context.commit("JIA", value);
  // },
  // jian(context, value) {
  //   context.commit("JIAN", value);
  // },
  jianOdd(context, value) {
    if (context.state.sum % 2) {
      context.commit("JIA", value);
    }
  },
  jianWait(context, value) {
    setTimeout(() => {
      context.commit("JIA", value);
    }, 500)
  },
}

const mutations = {
  JIA(state, value) {
    state.sum += value;
  },
  JIAN(state, value) {
    state.sum -= value;
  },
  ADDPERSON(state, value) {
    state.personList.unshift(value);
  }
}

const state = {
  sum: 0,
  msg: "hah",
  address: "虹桥",
  personList: [{
    name: "za",
    Id: 0
  }]
}

const getters = {
  getSum(state) {
    return state.sum * 10;
  }
}


Vue.use(Vuex);

export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters
});


