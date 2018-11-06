<template>
  <a-layout class="ant-layout-has-sider">
    <side-bar class="ant-layout-sider sider" :trigger="null" collapsible :collapsed="collapsed" :class="{'ant-layout-sider-collapsed':collapsed}"></side-bar>
    <a-layout></a-layout>
    <nav-bar :collapsed="collapsed" @toggle="toggleCollapsed"></nav-bar>
    <app-main></app-main>
    <a-layout-footer :style="{}">
      <div class="globalFooter">
        <div class="links">
          <a href="" target="_blank">DSP首页</a>
          <a href="" target="_blank">
            <i class="anticon anticon-github"></i>
          </a>
          <a href="" target="_blank">Dangerous People</a>
        </div>
        <div class="copyright">
          Copyright <i class="anticon anticon-copyright"></i>2018 Admin for Dangerous People
        </div>
      </div>
    </a-layout-footer>
  </a-layout>
</template>

<script>
  import {NavBar, SideBar, AppMain} from "./components";

  export default {
    name: "Layout",
    data() {
      return {
        collapsed: false
      }
    },
    methods: {
      toggleCollapsed() {
        this.collapsed = !this.collapsed;
      }
    },
    components:{
      NavBar,
      SideBar,
      AppMain
    }
  }
</script>

<style scoped lang="less">
  .app-wrapper{
    position: relative;
    height: 100%;
    width: 100%;
    &:after{
      content: "";
      display: table;
      clear: both;
    }
  }
  .ant-layout{
    min-height: 100%;
    transition: margin-left .28s;
    overflow-x: hidden;
  }
  .ant-layout-has-sider{
    flex-direction: row;
  }
  .globalFooter{
    padding: 0 16px;
    margin: 48px 0 24px;
    text-align: center;
    .links{
      margin-bottom: 8px;
      a{
        color:rgba(0, 0, 0, .5);
        transition: all .3s;
        &:not(:last-child){
          margin-right: 40px;
        }
      }
    }
  }
  .copyright{
    color: rgba(0, 0, 0, .5);
    font-size: 14px;
  }
</style>
