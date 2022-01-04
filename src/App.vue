<template>
  <div id="app">
    <!-- <div>
      {{ age }}
    </div>
    <button @click="hello">点击</button>

    <div>{{ text | mySlice }}</div>

    <br />
    <Tea></Tea>
    <Water></Water> -->

    <div class="wrap_left">
      <aHeader :addTodo="addTodo" />
      <aList :arr="arr" :cancelCheck="cancelCheck" :removeItem="removeItem" />
      <aFooter
        v-show="arr.length"
        :arr="arr"
        :checkAllTodo="checkAllTodo"
        :clearAll="clearAll"
      />

      <div class="_bus">
        <bLeft />
        <bRight />
      </div>

      <div class="_pubsub">
        <cLeft />
        <cRight />
      </div>

      <div>
        <dAnimation />
      </div>

      <div>
        <eAxios />
      </div>
    </div>

    <div class="wrap_right">
      <fCategory>
        <img src="../public/lydj.png" alt="" />
      </fCategory>
      <fCategory>
        <ul>
          <li v-for="item in list">{{ item }}</li>
        </ul>
      </fCategory>
      <fCategory>
        这是一段文字呢
      </fCategory>
    </div>
  </div>
</template>

<script>
import Tea from "./components/Tea";
import Water from "./components/Water";
import { a } from "./mixins";

import aHeader from "./components/aHeader";
import aList from "./components/aList";
import aFooter from "./components/aFooter";

import bLeft from "./components/bLeft.vue";
import bRight from "./components/bRight.vue";

import cLeft from "./components/cLeft.vue";
import cRight from "./components/cRight.vue";

import dAnimation from "./components/dAnimation";

import eAxios from "./components/eAxios.vue";

import fCategory from "./components/fCategory.vue";

export default {
  name: "App",
  mixins: [a],
  components: {
    Tea,
    Water,
    aHeader,
    aList,
    aFooter,

    bLeft,
    bRight,

    cLeft,
    cRight,

    dAnimation,

    eAxios,

    fCategory,
  },
  data() {
    return {
      age: 20,
      text: "一段文字试试看",
      arr: [
        { id: "001", txt: "吃法", done: true },
        { id: "002", txt: "睡觉", done: false },
        { id: "003", txt: "学习", done: true },
      ],
      list: ["佩奇", "配吧", "配酒"],
    };
  },
  mounted() {
    // console.log("原");
  },
  methods: {
    //增加
    addTodo(v) {
      this.arr.unshift(v);
      console.log("v", v);
      // 事件总线
      // 发布订阅
    },
    //取消勾选
    cancelCheck(id) {
      this.arr.forEach((item) => {
        if (item.id == id) {
          item.done = !item.done;
        }
      });
    },
    //删除
    removeItem(id) {
      this.arr = this.arr.filter((item) => item.id !== id);
    },

    // 全选或者全不选
    checkAllTodo(done) {
      this.arr.forEach((item) => {
        item.done = done;
      });
    },

    // 清除已选的
    clearAll() {
      this.arr = this.arr.filter((item) => !item.done);
    },
  },
};
</script>

<style scoped lang="less">
#app {
  display: flex;
  padding: 0 20px;
  border: 1px solid #ccc;
  .wrap_left {
    width: 600px;
    ._bus,
    ._pubsub {
      display: flex;
      width: 600px;
      height: 300px;
      border: 1px solid wheat;
    }
  }
  .wrap_right {
    display: flex;
    margin-left: 20px;
    border-left: 1px solid #ccc;
  }
}
</style>
