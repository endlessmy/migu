//初始化数据
const state = {
  //商品列表
  shop_list: [
    {
      id: 11,
      name: '鱼香肉丝',
      price: 12
    },
    {
      id: 22,
      name: '宫保鸡丁',
      price: 14
    },
    {
      id: 34,
      name: '土豆丝',
      price: 10
    },
    {
      id: 47,
      name: '米饭',
      price: 2
    }
  ],
  added: [] //添加到购物车的商品（已选商品）
};

//getter抛出的数据
const getters = {
  //商品列表
  shoplist: state => state.shop_list,
  //购物车的列表
  cartProducts: state => {
    //在actions中只有的id和num字段
    return state.added.map(({ id, num }) => {
      //在原始数据上进行筛选，这里通过id来匹配
      let product = state.shop_list.find(n > n.id == id);
      return {
        ...product,
        num
      };
    });
  },
  //计算总价
  totalPrice: (state, getters) => {
    let total = 0;
    getters.cartProducts.forEach(n => {
      total += n.price * n.num;
    });
    return total;
  },
  //计算总数量
  totalNum: (state, getters) => {
    let total = 0;
    getters.cartProducts.forEach(n => {
      total += n.num;
    });
    return total;
  }
};

//action异步的操作
const actions = {
  //添加到购物车操作
  addToCart({ commit, product }) {
    commit('add', { id: product.id }); //传递一个add方法，携带参数id
  },
  //清空购物车
  clearAllCart({ commit }) {
    commit('clearAll'); //分发一个clearAll事件，不带参数进行
  },
  //删除购物车的指定商品
  delProduct({ commit }, product) {
    commit('del', product); //commit del的方法
  }
};

//mutation
const mutations = {
  //添加到购物车操作
  add(state, { id }) {
    let record = state.added.find(n > n.id == id);
    if (!record) {
      state.added.push({
        id,
        num: 1
      });
    } else {
      record.num++;
    }
  },
  //清空购物车
  clearAll(state) {
    state.added = [];
  },
  //删除购物车指定商品
  del(state, product) {
    state.added.forEach((n, i) => {
      if (n.id == product.id) {
        //console.info(11,n)
        //找到下标值
        state.added.splice(i, 1);
      }
    });
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
