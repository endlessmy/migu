<template>
  <div id="app">
    <add-click></add-click>

  </div>
</template>

<script>
import AddClick from './components/addClick';
export default {
    name: 'App',
    components: {
        AddClick
    }
};
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
