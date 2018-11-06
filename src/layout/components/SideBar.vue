<template>
<div class="ant-layout-sider-children">
  <div class="logo">
    <a href="#">
      <!--todo:dsp logo-->
      <img src="" alt="">
      <h1 v-show="!collapsed">DSP后台管理</h1>
    </a>
  </div>
  <div>
    <a-menu :defaultSelectedKeys="['/analysis']"
            :defaultOpenKey="['/dashboard']"
            mode="inline" theme="light"
            :inlineCollapsed="collapsed">
      <template v-for="item in sideMenuConfig">
        <router-link v-if="!item.children" :to="item.path" :key="item.path">
          <a-menu-item :index="item.path">
            <a-icon type="item.icon"/>
            <span v-if="item.name" slot="title">{{item.name}}</span>
          </a-menu-item>
        </router-link>
        <a-sub-menu v-else :index="item.name || item.path" :key="item.path">
          <template slot="title">
            <span v-if="item && item.name" slot="title">
              <a-icon :type="item.icon"/>
              <span>{{item.name}}</span>
            </span>
          </template>
          <template v-for="child in item.children" v-if="!child.hidden">
            <a-menu-item :key="child.path">
              <router-link v-if="item.children" :to="item.path + child.path" :key="child.name">{{child.name}}</router-link>
            </a-menu-item>
          </template>
        </a-sub-menu>
      </template>
    </a-menu>
  </div>
</div>
</template>

<script>
  import {sideMenuConfig} from '../menuConfig';
  const rootSubmenuKeys = [];
  for(let item of sideMenuConfig) {
    rootSubmenuKeys.push(item.path)
  }
  const openKeys = ['/dashboard'];
  export default {
    name: "SideBar",
    props: ['collapsed'],
    data() {
      return {
        sideMenuConfig,
        rootSubmenuKeys,
        openKeys
      }
    },
    methods: {
      //TODO：why this
      onOpenChange(openKeys) {
        const lastOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1);
        if(this.rootSubmenuKeys.indexOf(lastOpenKey) === -1) {
          this.openKeys = openKeys;
        } else {
          this.openKeys = lastOpenKey ? [lastOpenKey] : []
        }
      }
    }
  }
</script>

<style scoped lang="less">
  .sider{
    min-height: 100vh;
    position: relative;
    z-index: 20;
    background-color: #fff;
    flex: 0 0 256px;
    width: 256px;
  }
  .ant-layout-sider-collapsed{
    flex: 0 0 80px;
    width: 80px;
  }
  .logo{
    height: 64px;
    position: relative;
    line-height: 64px;
    padding-left: 24px;
    transition: all .3s;
    overflow: hidden;
    h1, img{
      display: inline-block;
      vertical-align: middle;
    }
    img{
      height: 32px;
    }
    h1{
      color: #002140;
      font-size: 20px;
      margin-left: 12px;
    }
  }
  .ant-menu-inline, .ant-menu-vertical, .ant-menu-vertical-left{
    border-right: none;
  }
</style>
