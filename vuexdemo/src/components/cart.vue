<template>
    <div>
        <div>
            <h4>已选商品</h4>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>名称</th>
                        <th>价格</th>
                        <th>数量</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(shop,index) in cartProducts" :key="index">
                        <td>{{shop.id}}</td>
                        <td>{{shop.name}}</td>
                        <td>{{shop.price}}</td>
                        <td>{{shop.num}}</td>
                        <td>
                            <input type="button" value="删除" @click="delProduct(shop)">
                        </td>
                    </tr>
                    <tr v-if="!cartProducts.length">
                        <td colspan="5" style="text-align:center">您的购物车空空如也。。。</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <hr>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Cart",
  data() {
    return {
      cartProducts: []
    };
  },
  computed: {
    ...mapGetters(["cartProducts"]) //页面v-for中的数据
  },
  methods: {
    ...mapActions(["delProduct"])
  }
};
</script>
<style></style>