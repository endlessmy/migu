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
                           <input type="button" value="购物车">
                       </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Product',
    data() {
        return {
            shoplist: [
                {
                    id: 11,
                    name: '鱼香肉丝',
                    price: 12,
                },
                {
                    id: 22,
                    name: '宫保鸡丁',
                    price: 14,
                },
                {
                    id: 34,
                    name: '土豆丝',
                    price: 10,
                },
                {
                    id: 47,
                    name: '米饭',
                    price: 2,
                }
            ]
        }
    }
}
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
</style>