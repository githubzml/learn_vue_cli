<template>
  <div class="aHeader">
    <input type="text" placeholder="请输入" @keyup.enter="add" />
  </div>
</template>

<script>
import { nanoid } from "nanoid";
export default {
  name: "aHeader",
  props: ["addTodo"],
  methods: {
    add(e) {
      if (!e.target.value.trim()) return;
      const Obj = { id: nanoid(), txt: e.target.value, done: false };
      this.addTodo(Obj);
      e.target.value = "";
    },
  },
};
</script>

<style lang="less" scoped>
.aHeader {
  height: 40px;
  line-height: 40px;
  input {
    border: none;
    outline: none;
    height: 30px;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  input:focus {
    box-shadow: 3px 3px 5px #888888;
  }
}
</style>