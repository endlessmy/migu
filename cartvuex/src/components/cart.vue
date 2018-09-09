<template>
  <div class="cart">
      <div class="list">
          <ul>
              <li v-for="item in $store.state.goods" :key="item.id">
                  <img :src="item.img">
                  <div class="info">
                     <p>{{item.name}}</p>
                     <p>{{item.hint}}</p>
                     <P>￥{{item.price}}</P>
                     <div class="opertation">
                         <button>-</button>
                         {{count}}
                         <button>+</button>
                     </div>
                  </div>
              </li>
          </ul>
      </div>
      <div class="bottom">
         <div class="total">
             <p>合计：￥{{totalPrice}}</p>
         </div>
         <div class="price">
             <P>去结账：{{totalNumber}}</P>
         </div>
      </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    name: 'Cart',
    data() {
        return {

        }
    },
    computed: {
        ...mapState(['count'])
    }
}
</script>
<style lang="less">
.cart {
    width: 400px;
    height: 550px;
    border: 1px solid #ccc;
    .list {
        width: 400px;
        height: 450px;
        ul {
            li {
                list-style-type: none;
                width: 360px;
                height: 150px;
                background: #dddddd;
                margin-bottom: 10px;
                padding: 10px 10px;
                box-sizing: border-box;
                img {
                    width: 100px;
                    height: 100px;
                }
                .info {
                    float: right;
                    height: 110px;
                    width: 220px;
                    text-align: center;
                    font-size: 12px;
                }
            }
        }
    }
    .bottom {
        width: 400px;
        height: 50px;
        margin-top: 30px;
        .total {
            float: left;
            width: 250px;
            background: green;
            text-align: center;
        }
        .price {
            float: left;
            width: 150px;
            background: #ccc;
            text-align: center;
        }
    }
}
</style>