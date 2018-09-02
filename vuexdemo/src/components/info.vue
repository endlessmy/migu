<template>
    <div>
        <div>
            <p>总数：<strong>{{totalNum}}</strong></p>
            <p>总价：<strong>{{totalPrice}}</strong></p>
            <p><input type="button" value="清空购物车"></p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Info',
    data() {
        return {
            totalNum: 12,
            totalPrice: 54234
        }
    }
}
</script>