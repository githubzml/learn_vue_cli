<template>
  <div class="_bRight">
    bRight
    <div>同级值{{ oVal }}</div>
    <div>{{ num }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      oVal: "",
      num: 1,
    };
  },
  mounted() {
    this.$Bus.$on("thing", (params) => {
      this.oVal = params;
      this.num++;
      setTimeout(() => {
        this.$Bus.$off("thing");
      }, 300);
    });
  },
  beforeDestroy() {
    this.$Bus.$off("thing");
  },
};
</script>

<style scoped lang="less">
._bRight {
  width: 50%;
  height: 100%;
}
</style>