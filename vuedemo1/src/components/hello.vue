<template>
   <div>
     {{count}}
     <button @click="add(5)">加加</button>
   </div>
</template>
<script>
import { mapState,mapMutations } from 'vuex'

export default {
  name: "Hello",
  //state
  data() {
    return {};
  },
  computed:{
     ...mapState(['count'])
  },
  //actions
  methods: {
    ...mapMutations(['add'])
  }
};
</script>
<style></style>