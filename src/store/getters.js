export default{
  //将自己的方法暴露给所依赖的js文件(这里是index.js文件)
  // 类似于computed的用法, 所以getters个人习惯起名词
  // getters 不能够传参
  totalCount(state) {
    // 累加, 将car中所有商品的count属性进行累加
    let totalCount = 0
    state.car.forEach(item => totalCount += item.count)
    return totalCount
  }
  }