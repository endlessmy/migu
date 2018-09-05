<template>
    <div>
        <h4>结算</h4>
        <div>
            <p>总数：<strong>{{totalNum}}</strong></p>
            <p>总价：<strong>{{totalPrice}}</strong></p>
            <p><input type="button" value="清空购物车" @click="clearAllCart"></p>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Info",
  data() {
    return {
      totalNum: "",
      totalPrice: ""
    };
  },
  computed: {
    ...mapGetters(["totalPrice", "totalNum"])
  },
  methods: {
    ...mapActions(["clearAllCart"])
  }
};
</script>