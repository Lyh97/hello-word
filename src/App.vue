<template>
  <div id="app">
    <router-view></router-view>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" v-bind="post"/>
    <SlotTest></SlotTest> -->
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      post: {
        id: '12',
        name: 'Liu'
      }
    }
  }
}
</script>

<style>
html {
  background-image: url('./assets/background.jpeg');
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
