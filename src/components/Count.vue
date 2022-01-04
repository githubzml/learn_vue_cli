<template>
  <div class="_count">
    <h2>当前求和为：{{ $store.state.sum }}</h2>
    <h2>放大10倍：{{ $store.getters.getSum }}</h2>
    <h3>{{ msg }}</h3>
    <h4>{{ address }}</h4>

    <p style="color: red">下列组件人数为: {{ personList.length }}</p>

    <!-- <h3>{{ aaa }}</h3>
    <h4>{{ bbb }}</h4> -->
    <select v-model.number="nn">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <!-- 如果括弧不传递 默认传递的是事件 -->
    <button @click="increment(nn)">+</button>
    <button @click="decrement(nn)">-</button>
    <button @click="incrementOdd(nn)">当前求和为奇数再加</button>
    <button @click="incrementWait(nn)">等一等再加</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  name: "Count",
  data() {
    return {
      nn: 1,
    };
  },
  methods: {
    // increment() {
    //   //没有接口环节 可以直接越过dispatch
    //   // this.$store.dispatch("jia", this.nn);
    //   this.$store.commit("JIA", this.nn);
    // },
    // decrement() {
    //   // this.$store.dispatch("jian", this.nn);
    //   this.$store.commit("JIAN", this.nn);
    // },

    // this.$store.commit 简写方式1
    ...mapMutations({ increment: "JIA", decrement: "JIAN" }),
    // this.$store.commit 简写方式2
    // ...mapMutations(["JIA","JIAN"]),

    // incrementOdd() {
    //   this.$store.dispatch("jianOdd", this.nn);
    // },
    // incrementWait() {
    //   this.$store.dispatch("jianWait", this.nn);
    // },
    // this.$store.dispatch 简写方式1
    ...mapActions({ incrementOdd: "jianOdd", incrementWait: "jianWait" }),
    // this.$store.dispatch 简写方式2
    // ...mapActions(["jianOdd","jianWait"])
  },
  mounted() {},
  computed: {
    //this.$store.state 的简写方式 1
    ...mapState(["msg", "address", "personList"]),
    //this.$store.state 的简写方式 2 可以重新命名
    // ...mapState({ aaa: "msg", bbb: "address" }),
  },
};
</script>

<style scoped lang="less">
._count {
  button {
    margin: 0 10px;
  }
}
</style>