<template>
    <div>
        <div class="product">
            <h4>商品信息</h4>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>名称</th>
                        <th>价格</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                       v-for="(shop,index) in shoplist"
                       :key='index'>
                       <td>{{shop.id}}</td>
                       <td>{{shop.name}}</td>
                       <td>{{shop.price}}</td>
                       <td>
                           <input type="button" value="购物车" @click="addToCart(shop)">
                       </td>
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
  name: "Product",
  data() {
    return {
      shoplist: [
        {
          id: 11,
          name: "鱼香肉丝",
          price: 12
        },
        {
          id: 22,
          name: "宫保鸡丁",
          price: 14
        },
        {
          id: 34,
          name: "土豆丝",
          price: 10
        },
        {
          id: 47,
          name: "米饭",
          price: 22
        }
      ]
    };
  },
  computed: {
    ...mapGetters(["shoplist"])
  },
  methods: {
    ...mapActions(["addToCart"])
  }
};
</script>
<style lang="less">
table {
  width: 800px;
  border: 1px solid #ccc;
  thead {
    tr {
      border: 1px solid #ccc;
    }
  }
  tbody {
    tr {
      td {
        border: 1px solid #ccc;
      }
    }
  }
}
hr {
  border: 1px solid red;
}
</style>