# vue-sbi

> 这是一个极端项目

## vue-cli 脚手架
  1. 装包

    全局安装 webpack 和 webpack-cli

      npm i webpack webpack-cli -g
    全局安装 vue-cli 脚手架包

      npm i vue-cli -g
  2. 使用脚手架命令新建一个webpack工程化的vue项目

    找一个风水宝地

     vue init webpack 项目名称(目录名称)
    例如:

      PS C:\Users\LTC\Desktop> vue init webpack vue-cms

      ? Project name vue-cms
      ? Project description 这是一个高端项目
      ? Author TianchengLee <ltc6634284@gmail.com>
      ? Vue build runtime
      ? Install vue-router? Yes
      ? Use ESLint to lint your code? Yes 建议选No
      ? Pick an ESLint preset Standard
      ? Set up unit tests No
      ? Setup e2e tests with Nightwatch? No
      ? Should we run `npm install` for you after the project has been created? (recommended) npm
  3. 执行以上向导完成后, 会自动开始装包, 注意: 使用的是npm install, 速度可能会比较慢

    如果安装失败, 建议ctrl + C终止后执行cnpm i

  4. 安装完成后所有的webpack配置都已配好, 注意: 但是所有的样式预处理loader都没有安装, 需要使用less   就安装less和less-loader, 无需自己配置, 只需要安装即可
## 制作首页APP组件
1. 完成header区域 ，使用的是Mint-UI中的Header组件
2. 制作底部的Tabbar区域 使用的是MUI的Tabbar.html
  + 在制作购物车小图标，要把扩展图标的css样式和扩展字体库，添加相对应的样式
3. 要在中间区域放置一个router-view来展示路由匹配到的组件
## 改造tabbar为router-link

## 设置路由高亮
`linkActiveClass: 'mui-active'`

## 点击tabbar中的路由链接，展示对应的路由组件
  1. 路由链接  组件  对应的坑`<router-view></router-view>`
## 制作首页轮播图布局

## 加载首页轮播图数据
  1. 获取数据 使用vue-resource  装包`cnpm i vue-resource -S`
  2. 使用vue-resource的`this.$http.get`获取数据
  3. 获取到的数据要保存到data身上
  4. 使用v-for循环渲染每个item项
## 给组件切换添加动画
      .v-enter {
      opacity: 0;
      transform: translateX(100%);
    }

    .v-leave-to {
      opacity: 0;
      transform: translateX(-100%);
      position: absolute;
    }

    .v-enter-active,
    .v-leave-active {
      transition: all 0.5s ease;
    }
## 改造九宫格区域样式

## 改造新闻资讯路由链接

## 新闻资讯页面制作
1. 绘制界面，使用MUI中的media-list.html
2. 使用 `vue-resource`获取数据
3. 渲染真实数据
4. 定义全局过滤器 格式化时间

## 实现新闻资讯列表 点击跳转的新闻详情
1. 把列表中的每一项改造为`router-link`,同时跳转要提供唯一id标识符
2. 创建新闻信息页组件 `newsInfo/index.vue`
3. 在路由模块中，将新闻详情页路由地址和组件页面对应起来

## 实现新闻详情的页面布局和数据渲染

## 单独封装一个评论子组件
1. 单独创建一个单独的comment.vue组件模板
2. 在需要使用comment组件的页面中，先手动导入comment组件
  + `import comment from './comment.vue'`
3. 在父组件中，使用`components`属性，将刚才导入的comment组件，注册为自己的子组件
4. 将注册子组件时候的注册名称，以标签的形式，在页面中引用即可

## 获取所有的评论数据显示到页面中
1. 父子组件传值的运用：
 + 父组件中`<comment :id="this.id"></comment>`上属性绑定父组件的数据值
 + 子组件属性中`props: ["id"]`

## 实现点击加载更多评论的功能
1. 为加载更多按钮，绑定点击事件，在事件中，请求下一页数据
2. 点击加载更多，让pageIndex++，然后重新调用this.getComments(),重新获取最新一页数据
3. 为防止新数据覆盖老数据，我们在点击加载更多的时候，每当获取到新数据，应该让老数据，调用数组的concat 方法，拼接上新数组

## 发表评论
1. 把文本框做双向数据绑定
2. 为发表按钮绑定一个事件
3. 校验评论内容是否为空，如果为空，则Toast用户，评论不能为空
4. 通过vue-resource 发送请求，把评论内容提交给服务器
5. 当评论发表后，重新刷新列表，查看最新评论
  + 如果调用 getComents(),可能只能获取最后一页的评论，前几页的评论获取不到
  + 解决思路：
   >> 1. 当评论成功后，在客户端 手动拼接一个最新的评论对象，然后调用数组的unshift 方法 把最新的评论，追加到 data中的coments的开头；这样就能完美刷新评论列表的需求；
   >> 2. 思路2: 将本地数据全部清空, 重新获取第一页的数据
      // 将现在的数据清空
      `this.comments = []`
      // 重置索引
      `this.pageIndex = 1`
      // 重新获取评论
      `this.getComments()`
      // 清空文本框
      `this.msg = "";`

## 改造图片分享按钮链接为路由的链接并显示对应的组件页面

## 绘制图片列表 组件页面结构 并美化样式
1. 制作 顶部滑动条
2. 制作 底部图片列表

### 制作顶部滑动条遇到的问题：
> 1. 需要借助 MUI 中的 `tab-top-webview-main.html`
> 2. 需要把 slider 区域的 `mui-fullscreen` 类 去掉 
> 3. 滑动条 无法正常触发滑动，通过检查官方文档，发现是js组件， 需要被初始化一下：
   + 导入 mui.js
   + 调用官方提供的方式 初始化：
   ```
   mui('.mui-scroll-wrapper').scroll({
	  deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
   });
  ```
> 4. 导入 mui.js 报错Uncaught TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions 
  + 原因就是 mui.js 中使用了 'caller', 'callee', and 'arguments' 但是webpack打包的配置文件babel-loader编译js文件时使用了严格模式`'use strict'`，所有两者冲突了;
  + 解决方案：1. 修改mui.js的非严格模式代码，但是不现实
  + 解决方案：2. 把webpack打包时候的严格模式禁用掉(以前的通过插件方法实现，现在用不了)
  + 解决方案：3. 修改.babelrc,略过某个js文件 
  ```
   "ignore": [
    "./src/lib/mui/js/mui.js"
    ],
  ```
> 5. 刚进入图片分享页面的时候，滑动条无法正常工作，如果要初始化滑动条，必须等DOM元素加载完毕，代码 搬到mounted生命周期函数中
> 6. 当滑动条 调试后发现tabbar 无法正常工作，需要把每个tabbar按钮样式中的`mui-tab-item`重新修改名字  
> 7. 获取所有分类，并渲染分类列表

### 制作图片列表区域
1. 图片列表需要使用懒加载技术，可以用Mint-UI 提供的现成组件`lazy-load`
2. 根据`lazy-load`的使用文档，尝试使用
3. 渲染图片列表数据

## 点击图片 跳转到图片详情页面 路由链接
1. 在改造 li 成route-link的时候，需要使用tag 属性 指定要渲染为哪种元素

## 实现详情页面的布局和美化，同时获取数据渲染页面

## 实现图片详情中 缩略图的功能（极简版的）
1. 使用插件vue-pic-preview 这个缩略图插件低配版，一个机智的小伙保存下来了(最原始的简单的vue-preview副本插件)
2. 最新版的vue-preview功能多，配置复杂 有时间在慢慢研究
3. 获取到所有图片列表后，使用 v-for 指令渲染数据
4. 注意：img标签上的class不能去掉
5. 注意：每个图片数据对象中，必须有 w 和 h 属性

## 绘制商品列表 页面基本结构并美化

## 在手机上进行项目的预览和测试
1. 手机和项目电脑处于同一 WIFI 环境 手机访问电脑IP
2. 在项目package.json 文件，在dev脚本中，添加一个--host指令，把当前电脑WIFI  IP地址，设置为 --host的 指令值(手动配置)
3. 查看电脑所处WIFI 的IP， 在cmd终端运行`ipconfig`
4. 在项目config目录下index.js 文件中大概第16行，修改host地址为当前WIFI的IP地址(vue-cli配置)

### vue-router中编程式导航的基本使用
  1. 使用JS的形式进行路由导航
    + 注意： 一定要区分 this.$route 和 this.$router 这两个对象，
    + 其中： this.$route 是路由【参数对象】，所有路由中的参数， params, query 都属于它
    + 其中： this.$router 是一个路由【导航对象】，用它 可以方便的 使用 JS 代码，实现路由的 前进、后退、 跳转到新的 URL 地址

  // console.log(this);
  > 1. 最简单的  根据path进行跳转
  // this.$router.push("/home/goodsInfo/" + id);
  > 2. 传递对象  如果传入了path 则params无效
  // 例如: this.$router.push({ path: '/home/goodsInfo', params:{ id } })
  // this.$router.push({ path: "/home/goodsInfo/" + id });
  > 3. 传递命名的路由  params只能和name同时使用
  // 如果使用path进行跳转, 还需要携带参数, 必须自行手动拼接
    `this.$router.push({ name: "goodsInfo", params: { id } })`




