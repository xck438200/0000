<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view style="background-color:yellow;"></router-view>
    <router-view name="left" style="float:left;width:50%;height:300px;background-color:gold;"></router-view>
    <router-view name="right" style="float:left;width:50%;height:300px;background-color:orange;"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
