<template>
  <div id="app">
     <learn-click></learn-click>
  </div>
</template>

<script>
import LearnClick from './components/learnClick'
export default {
  name: 'App',
  components: {
    LearnClick
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
