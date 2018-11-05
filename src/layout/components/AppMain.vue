<template>
<a-layout-content :style="{margin: '24px 24px 0',height: '100%'}">
  <transition name="fade" mode="out-in">
    <router-view></router-view>
  </transition>
</a-layout-content>
</template>

<script>
  export default {
    name: "AppMain"
  }
</script>

<style scoped>

</style>
