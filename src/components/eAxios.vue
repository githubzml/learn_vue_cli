<template>
  <div>axios</div>
</template>

<script>
import axios from "axios";
export default {
  mounted() {
    axios.get("/hahah/student").then((res) => {
      console.log("res", res);
    });
  },
};
</script>

<style>
</style>