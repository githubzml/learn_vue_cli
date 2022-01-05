<template>
  <div>
    <p>水果名字是：{{ fruit }}</p>
    <p>食物名字是：{{ food1 }}</p>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("fruitAbout", ["fruit"]),
    ...mapState("foodAbout", ["food1"]),
  },
  mounted() {
    console.log("this", this);
  },
};
</script>

<style>
</style>