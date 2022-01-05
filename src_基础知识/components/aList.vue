<template>
  <div>
    <aItem
      v-for="item in arr"
      :todoObj="item"
      :cancelCheck="cancelCheck"
      :removeItem="removeItem"
    />
  </div>
</template>

<script>
import aItem from "./aItem";
export default {
  name: "aList",
  components: { aItem },
  props: ["arr", "cancelCheck", "removeItem"],
  data() {
    return {};
  },
};
</script>

<style>
</style>