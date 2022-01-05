import axios from "axios"

export default {
  namespaced: true,
  state: {
    info: "a person",
    poem: ""
  },
  actions: {
    getPoem(context, state) {
      axios.get("https://api.uixsj.cn/hitokoto/get").then(res => {
        let { data } = res;
        context.commit("GET_POEM", data);
      })
    }
  },
  mutations: {
    GET_POEM(state, value) {
      state.poem = value;
    }
  }
}
