<template>
  <div class="afooter">
    <div>
      <input
        type="checkbox"
        :checked="total == arr.length && total > 0"
        @change="handleCheck"
      />
      <span>已完成 {{ total }} / 全部 {{ arr.length }}</span>
    </div>
    <button @click="clearAll">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "aFooter",
  props: ["arr", "checkAllTodo", "clearAll"],
  computed: {
    total() {
      return this.arr.filter((item) => item.done).length;
    },
  },
  methods: {
    handleCheck(e) {
      this.checkAllTodo(e.target.checked);
    },
  },
};
</script>

<style lang="less" scoped>
.afooter {
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>