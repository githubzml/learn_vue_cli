<template>
  <div class="_cRight">
    <div>cRight</div>
    <button @click="clickMe">点我</button>
  </div>
</template>

<script>
import PubSub from "pubsub-js";
export default {
  methods: {
    clickMe() {
      //发布订阅
      PubSub.publish("aaa", "一段文字内容");
    },
  },
};
</script>

<style scoped lang="less">
._cRight {
  width: 50%;
  height: 100%;
}
</style>