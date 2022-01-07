<template>
  <div>
    <h2>detail</h2>

    <p>
      {{ $route.query.id }}
      {{ $route.query.info }}
    </p>
  </div>
</template>

<script>
export default {
  mounted() {},
};
</script>

<style>
</style>