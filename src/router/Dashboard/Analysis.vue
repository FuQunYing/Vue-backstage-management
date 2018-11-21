<template>
  <div>
    <p>
      数据分析页
    </p>
  </div>
</template>

<script>
  import {
    Bar,
    ChartCard,
    MiniArea,
    MiniBar,
    MiniProgress,
    Pie
  } from "../../components/Charts";

  export default {
    name: "Analysis",
    data() {
      return {

      }
    },
    components: {
      Bar,
      ChartCard,
      MiniArea,
      MiniBar,
      MiniProgress,
      Pie
    }
  }
</script>

<style scoped>

</style>
