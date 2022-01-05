<template>
  <div>
    <h2>新闻详情</h2>

    <!-- <p>
      {{ $route.params.id }}
      {{ $route.params.info }}
    </p> -->

    <p>
      {{ id }}
      {{ info }}
    </p>
  </div>
</template>

<script>
export default {
  // /:id/:info
  props: ["id", "info"],
};
</script>

<style>
</style>