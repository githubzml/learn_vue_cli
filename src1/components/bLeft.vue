<template>
  <div class="_bLeft">
    <div>bLeft</div>
    <button @click="clickMe">点我</button>
  </div>
</template>

<script>
export default {
  methods: {
    clickMe() {
      this.$Bus.$emit("thing", 123);
    },
  },
};
</script>

<style scoped lang="less">
._bLeft {
  width: 50%;
  height: 100%;
  border-right: 1px solid black;
}
</style>