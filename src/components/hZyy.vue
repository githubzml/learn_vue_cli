<template>
  <div>
    <slot :game="game"></slot>
  </div>
</template>

<script>
export default {
  name: "hZyy",
  data() {
    return {
      game: ["学习", "学习", "还是学习"],
    };
  },
};
</script>

<style>
</style>