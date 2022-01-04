<template>
  <div class="_fCategory">
    <h2>fCategory.vue</h2>
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
._fCategory {
  width: 300px;
  height: 300px;
  background-color: orange;
  margin-right: 20px;
  h2 {
    width: 100%;
    height: 30px;
    line-height: 30px;
    background-color: orangered;
  }
  img {
    width: 100%;
    height: 200px;
  }
}
</style>