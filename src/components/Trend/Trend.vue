<template>
  <div class="trendItem">
    <slot></slot>
    <span :class="flag">
      <a-icon :type="'caret-'+flag"></a-icon>
    </span>
  </div>
</template>

<script>
  export default {
    name: "Trend",
    props: ['flag']
  }
</script>

<style scoped lang="less">
  .trendItem{
    display: inline-block;
    font-size: 14px;
    line-height: 22px;
    .up, .down{
      margin-left: 4px;
      position: relative;
      top: 1px;
      i {
        font-size: 12px;
        transform: scale(0.83);
      }
    }
    .up{
      color: #f5222d;
    }
    .down{
      color: #52c41a;
      top: -1px;
    }
    &.trendItemGrey .up,
    &.trendItemGrey .down{
      color: fade(#000, 65%);
    }
    &.reverseColor .up {
      color: #52c41a;
    }
    &.reverseColor .down {
      color: #f5222d;
    }
  }
</style>
