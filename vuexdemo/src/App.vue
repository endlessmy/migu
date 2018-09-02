<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <router-view/> -->
    <product></product>
    <cart></cart>
    <info></info>
  </div>
</template>

<script>
import Product from './components/product'
import Cart from './components/cart'
import Info from './components/info'
export default {
  name: 'App',
  components: {
    Product,
    Cart,
    Info
  }
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
