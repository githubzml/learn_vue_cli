<template>
  <div class="_a">
    <button @click="show = !show">点我</button>
    <transition appear>
      <h1 v-show="show" class="con">动画</h1>
    </transition>

    <h1 class="animate__animated animate__shakeY">An animated element</h1>
  </div>

  
</template>

<script>
import "animate.css";
export default {
  data() {
    return {
      show: true,
    };
  },
  methods: {
    hClick() {},
  },
};
</script>

<style scoped lang="less">
._a {
  margin: 20px 0;
  .con {
    width: 100%;
    height: 50px;
    background-color: orange;
  }
}
.v-enter-active {
  animation: an 0.5s linear;
}
.v-leave-active {
  animation: an 0.5s reverse;
}
@keyframes an {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}
</style>