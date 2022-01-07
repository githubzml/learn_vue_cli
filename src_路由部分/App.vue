<template>
  <div class="wrap">
    <Banner></Banner>
    <router-link to="/about" active-class="active">about</router-link>
    <router-link to="/home" active-class="active">home</router-link>

    <router-link to="/guard" active-class="active">guard</router-link>

    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Banner from "./components/Banner.vue";
export default {
  name: "App",
  components: {
    Banner,
  },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.wrap {
  a {
    margin: 0 10px;
  }
  .active {
    color: red;
  }
}
</style>