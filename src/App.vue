<template>
  <div>
    <Count></Count>
    <br>
    <hr>
    <PersonList></PersonList>
  </div>
</template>

<script>
import Count from "./components/Count.vue";
import PersonList from "./components/PersonList";
export default {
  name: "App",
  components: { Count, PersonList },
  data() {
    return {};
  },
};
</script>

<style>
</style>