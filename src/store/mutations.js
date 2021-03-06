export default {
  //将自己的方法暴露给所依赖的js文件(这里是index.js文件)
  // mutation不能获取返回值
  addToCar(state, goodsInfo) {
    // 添加商品到购物车
    // 1. 如果购物车中没有该商品, 直接push
    // 2. 如果购物车中有该商品了, 应该取出该商品, 将其 count 属性 += 新传入的goodsInfo的count属性

    // 在for循环之前  先假设没有找到
    let isFound = false
    // 普通for循环
    // 问题一  如何去数组中找一个对象是否存在 ?
    // for (let i = 0; i < state.car.length; i++) {
    //   let carInfo = state.car[i]
    //   // 如果两者相等 表示数组中已经存在该商品
    //   if (carInfo.id == goodsInfo.id) {
    //     carInfo.count += goodsInfo.count
    //     // 只要进入了if 表示找到了
    //     isFound = true
    //     break
    //   }
    // }
    // some方法: 迭代数组的方法, 特点是如果回调函数返回true表示找到了, 就会停止循环
    state.car.some(item => {
      if (item.id == goodsInfo.id) {
        // 表示找到了
        item.count += goodsInfo.count
        return isFound = true
      }
    })

    // forEach some every reduce map filter等ES5的数组迭代方法 都不能使用break
    // state.car.forEach(item => {
    //   // 函数中能使用break?  否
    // })

    // 问题二  在for循环结束后如何判断是否找到该商品了?
    // isFound表示是否找到商品
    if (!isFound) {
      state.car.push(goodsInfo)
    }

    // JS基础很重要 JS基础: 冒泡排序 假设已经排好序了  DOM: 全选反选 假设已经全选了
    // 假设法  在开发中非常常用

    // localStorage只能存字符串
    localStorage.setItem('car', JSON.stringify(state.car))
  },
  updateCarInfo(state, goodsInfo) {
    state.car.some(item => {
      if (item.id == goodsInfo.id) {
        item.count = parseInt(goodsInfo.count)
        return true
      }
    })
    localStorage.setItem('car', JSON.stringify(state.car))
  },
  removeFormCar(state, id) {
    state.car.some((item, i) => {
      if (item.id == id) {
        state.car.splice(i, 1)
        return true
      }
    })
    localStorage.setItem('car', JSON.stringify(state.car))
  },
  updateGoodsSelected(state, goodsInfo) {
    state.car.some(item => {
      if (item.id == goodsInfo.id) {
        item.selected = goodsInfo.selected
        return true
      }
    })
    localStorage.setItem('car', JSON.stringify(state.car))
  }
}