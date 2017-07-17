<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>导航:
    <router-link to="/">首页</router-link>||
    <router-link to="/Hi">Hi页面</router-link>
    <router-link :to="{name:'xck',params:{username:'nicai',id:'qqq'}}">Hi1页面</router-link>
    <router-link to="/Hi/Hi2">Hi2页面</router-link>
    </div>
    <p>{{ $route.name }}</p>
    <router-view></router-view>
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
