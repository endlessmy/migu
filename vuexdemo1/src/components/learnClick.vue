<template>
  <div>
      <h1>Count is {{count}}</h1>
      <button @click="add">+1</button>
      <button @click="reduce">-1</button>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
export default {
    name: 'LearnClick',
    data() {
        return {}
    },
    computed: {
        ...mapState(['count'])
    },
    methods: {
        ...mapActions(['add', 'reduce'])
    }
}
</script>