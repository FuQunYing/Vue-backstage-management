<template>
<a-layout-header class="header">
  <a-icon class="fold" @click="toggleCollapsed" :type="collapsed ? 'menu-unfold' : 'menu-fold'"/>
  <div class="right">
    <span class="item">
      <a-icon type="search"/>
    </span>
    <a target="_blank" rel="noopener noreferrer" class="item link" href="https://pro.ant.design/docs/getting-started">
      <a-icon type="question-circle-o"/>
    </a>
    <span class="item link">
      <a-icon type="notification"/>
    </span>
    <a-dropdown class="item link">
      <span>
        <a-avatar size="small" src="https://avatars1.githubusercontent.com/u/33327558?s=40&v=4" class="avatar"/>
        <span class="user-name">緑間どこ</span>
      </span>
      <a-menu slot="overlay" class="user-dropdown">
        <a-menu-item>个人中心</a-menu-item>
        <a-menu-item>设置</a-menu-item>
        <a-menu-item>
          <span>退出</span>
        </a-menu-item>
      </a-menu>
    </a-dropdown>
  </div>
</a-layout-header>
</template>

<script>
  export default {
    name: "NavBar",
    props: ['collapsed'],
    methods: {
      toggleCollapsed() {
        this.$emit('toggle')
      }
    }
  }
</script>

<style lang="less" scoped>
  .header{
    padding-right: 12px;
    background-color: #fff;
    box-shadow: 0 1px 4px rgba(0, 21, 41, .1);
    position: relative;
    .fold{
      font-size: 20px;
      line-height: 64px;
      cursor: pointer;
      transition: all .3s, padding 0s;
      padding: 0 24px;
      &:hover{
        background-color: aliceblue;
      }
    }
    .right{
      float: right;
      height: 100%;
      .item{
        cursor: pointer;
        padding: 0 12px;
        display: inline-block;
        transition: all .3s;
        height: 100%;
        & > i{
          font-size: 16px;
          vertical-align: middle;
          color: rgba(0, 0, 0, .65);
        }
        .avatar{
          margin: 20px 8px 20px 0;
          color: #1890ff;
          background-color: hsla(0, 0%, 100%, .8);
          vertical-align: middle;
        }
      }
      .link{
        &:hover{
          background-color: #e6f7ff;
        }
      }
      .user-profile-body{
        position: relative;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding-right: 14px;
      }
      .user-avatar{
        width: 24px;
        height: 24px;
        margin: 0 8px 0 12px;
        border-radius: 4px;
      }
    }
  }
</style>
