<template>
   <div>
       {{count}}
       <button @click="add">加加</button>
   </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    name: 'World',
    //state
    data() {
        return {};
    },
    computed: {
        ...mapState(['count'])
    },
    //actions
    methods: {
        // ...mapActions({ add: 'creatAction' })
        add() {
            this.$store.dispatch('creatAction');
        }
    }
};
</script>
<style></style>