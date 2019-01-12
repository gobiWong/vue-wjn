<template>
  <div class="goodsinfo-container">
    <!-- 商品轮播图区域 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <!-- <swiper :lunbotuList="lunbotu" :isfull="false"></swiper> -->
          <mt-swipe :speed="300" :auto="3000">
            <mt-swipe-item v-for="(item, index) in lunbotu" :key="index">
              <img :src="item.src" alt>
            </mt-swipe-item>
          </mt-swipe>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">这是一个最简单的卡片视图控件；卡片视图常用来显示完整独立的一段信息，比如一篇文章的预览图、作者信息、点赞数量等</div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-header">页眉</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）</div>
      </div>
      <div class="mui-card-footer">页脚</div>
    </div>
  </div>
</template>

<script>
// 导入轮播图组件
// import swiper from "../subcomponents/swiper.vue";
// 导入 数字选择框 组件
// import numbox from "../subcomponents/goodsinfo_numbox.vue";
export default {
  data(){
    return {
      id: this.$route.params.id, // 将路由参数对象中的 id 挂载到 data , 方便后期调用
      lunbotu: [], // 轮播图的数据
      goodsinfo: {}, // 获取到的商品的信息
      ballFlag: false, // 控制小球的隐藏和显示的标识符
      buyCount: 1 // 保存用户选中的商品数量， 默认，认为用户买1个
    }
  },
  created() {
    this.getLunbotu();
    this.getGoodsInfo();
  },
  methods:{
    getLunbotu() {
      this.$http.get("api/getthumimages/" + this.id).then(result => {
        if (result.body.status === 0) {
          // 先循环轮播图数组的每一项，为 item 添加 img 属性，因为 轮播图 组件中，只认识 item.img， 不认识 item.src
          result.body.message.forEach(item => {
            item.img = item.src;
          });
          this.lunbotu = result.body.message;
        }
      })
    },
     getGoodsInfo() {
      // 获取商品的信息
      this.$http.get("api/goods/getinfo/" + this.id).then(result => {
        if (result.body.status === 0) {
          this.goodsinfo = result.body.message[0];
        }
      });
    }
  }
}
</script>

<style lang="less" scoped>
.goodsinfo-container {
  background-color: #eee;
  overflow: hidden;
  .mint-swipe {
    height: 200px;
    img {
      width: 340px;
      height: 200px;
    }
  }
  .now_price {
    color: red;
    font-size: 16px;
    font-weight: bold;
  }

  .buy-count {
    .num-box {
      position: relative;
      display: inline-block;
      overflow: hidden;
      width: 220px;
      height: 35px;
      input[type="text"] {
        width: 65px;
        text-align: center;
      }
      input[type="button"] {
        width: 40px;
        height: 100%;
      }
    }
  }

  .mui-card-footer {
    display: block;
    button {
      margin: 15px 0;
    }
  }

  .ball {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    z-index: 999;
    top: 390px;
    left: 146px;
  }
}
</style>

