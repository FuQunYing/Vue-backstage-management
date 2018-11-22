<template>
  <div class="numberInfo">
    <div class="numberInfoTitle" v-if="title">{{title}}</div>
    <div class="numberInfoSubTitle">
      <slot name="subTitle"></slot>
    </div>
    <div class="numberInfoValue" :style="gap ? {marginTop: `${gap}px` }: null">
      <span>
        {{total}}
        <em v-if="suffix" class="suffix">{{suffix}}</em>
      </span>
      <span class="subTotal">
        {{subTotal}}
        <a-icon v-if="status" :type="'caret-'+status"></a-icon>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NumberInfo",
    props: {
      title: {},
      subTitle: {},
      gap: {},
      total: {},
      subTotal: {},
      status: {},
      suffix: {},
      theme: {}
    },
    data () {
      return {}
    }
  }
</script>

<style scoped lang="less">
  .numberInfo {
    .suffix {
      color: fade(#000, 65%);
      font-size: 16px;
      font-style: normal;
      margin-left: 4px;
    }
    .numberInfoTitle {
      color: fade(#000, 65%);
      font-size: 16px;
      margin-bottom: 16px;
      transition: all 0.3s;
    }
    .numberInfoSubTitle {
      color: fade(#000, 65%)-secondary;
      font-size: 14px;
      height: 22px;
      line-height: 22px;
      overflow: hidden;
      text-overflow: ellipsis;
      word-break: break-all;
      white-space: nowrap;
      & > span {
        color: fade(#000, 65%);
        display: inline-block;
        height: 32px;
        line-height: 32px;
        font-size: 24px;
        margin-right: 32px;
      }
      .subTotal{
        color: fade(#000, 65%)-secondary;
        font-size: 16px;
        vertical-align: top;
        margin-right: 0;
        i {
          font-size: 12px;
          transform: scale(0.8);
          margin-left: 4px;
        }
        :global{
          .anticon-caret-up {
            color: #f5222d;
          }
          .anticon-caret-down{
            color: #52c41a;
          }
        }
      }
    }
  }
  .numberInfolight{
    .numberInfoValue{
      & > span {
        color: fade(#000, 65%);
      }
    }
  }
</style>
