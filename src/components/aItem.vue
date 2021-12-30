<template>
  <div class="a_list">
    <div>
      <input
        type="checkbox"
        :checked="todoObj.done"
        @change="handleClick(todoObj.id)"
      />
      {{ todoObj.txt }}
    </div>
    <button class="btn" @click="remove(todoObj.id)">删除</button>
  </div>
</template>

<script>
export default {
  name: "aItem",
  props: ["todoObj", "cancelCheck", "removeItem"],
  methods: {
    handleClick(id) {
      this.cancelCheck(id);
    },
    remove(id) {
      this.removeItem(id);
    },
  },
};
</script>

<style lang="less" scoped>
.a_list {
  height: 30px;
  line-height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .btn {
    display: none;
  }
}
.a_list:hover {
  background-color: #ddd;
  .btn {
    display: block;
  }
}
</style>