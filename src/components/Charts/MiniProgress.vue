<template>
  <div class="miniProgress">
    <a-tooltip :title="'目标值' + target + '%'">
      <div class="target" :style="{left: target ? `${target}%` : null}">
        <span :style="{backgroundColor: color}"></span>
        <span :style="{backgroundColor: color}"></span>
      </div>
    </a-tooltip>
    <div class="progressWrap">
      <div class="progress" :style="{
        backgroundColor:color,
        width: percent ? `${percent}%` : null,
        height: `${strokeWidth}px`
      }"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MiniProgress",
    props: ['percent', 'strokeWidth','target','color'],
    data () {
      return {}
    }
  }
</script>

<style scoped lang="less">
  /*@import "~ant-design-vue/lib/style/themes/default.less";*/
  .miniProgress{
    padding: 5px 0;
    position: relative;
    width: 100%;
    .progressWrap {
      background-color: hsv(0, 0, 96%);
      position: relative;
    }
    .progress{
      transition: all .4s cubic-bezier(0.08, 0.82, 0.17,1) 0s;
      border-radius: 1px 0 0 1px;
      background-color: #1890ff;
      width: 0;
      height: 100%;
    }
    .target{
      position: absolute;
      top: 0;
      bottom: 0;
      span{
        border-radius: 100px;
        position: absolute;
        top: 0;
        left: 0;
        height: 4px;
        width: 2px;
      }
      span:last-child{
        top: auto;
        bottom: 0;
      }
    }
  }
</style>
