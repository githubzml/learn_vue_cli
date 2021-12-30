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

    <aHeader :addTodo="addTodo" />
    <aList :arr="arr" :cancelCheck="cancelCheck" :removeItem="removeItem" />
    <aFooter
      v-show="arr.length"
      :arr="arr"
      :checkAllTodo="checkAllTodo"
      :clearAll="clearAll"
    />
  </div>
</template>

<script>
import Tea from "./components/Tea";
import Water from "./components/Water";
import { a } from "./mixins";

import aHeader from "./components/aHeader";
import aList from "./components/aList";
import aFooter from "./components/aFooter";
export default {
  name: "App",
  mixins: [a],
  components: {
    Tea,
    Water,
    aHeader,
    aList,
    aFooter,
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

<style>
#app {
  width: 600px;
  padding: 0 20px;
  /* height: 300px; */
  border: 1px solid #ccc;
}
</style>
