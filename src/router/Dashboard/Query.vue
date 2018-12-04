<template>
  <div>数据查询
    <div>
      <a-button-group>
        <a-button @click="tabClick('Home')">Home</a-button>
        <a-button @click="tabClick('Post')">Post</a-button>
        <a-button @click="tabClick('Archive')">Archive</a-button>
      </a-button-group>
      <component v-bind:is="currentComponent"></component>
    </div>
  </div>
</template>

<script>
  import {Archive, Home, Post} from "./tabchange";

  export default {
    name: "Query",
    data() {
      return {
        currentComponent: Home
      }
    },
    methods: {
      tabClick(type) {
        console.log(type);
        this.currentComponent = type;
      }
    },
    components: {
      Archive,
      Home,
      Post
    }
  }
</script>

<style scoped>

</style>
