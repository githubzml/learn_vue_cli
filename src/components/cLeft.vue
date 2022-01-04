<template>
  <div class="_cLeft">
    <div>bLeft</div>
  </div>
</template>

<script>
let pid = null;
import PubSub from "pubsub-js";
export default {
  mounted() {
    //订阅
    pid = PubSub.subscribe("aaa", (msg, data) => {
      console.log("params", msg, data);
    });
  },
  beforeDestroy() {
    // 取消订阅
    PubSub.unsubscribe(pid);
  },
};
</script>

<style scoped lang="less">
._cLeft {
  width: 50%;
  height: 100%;
  border-right: 1px solid black;
}
</style>