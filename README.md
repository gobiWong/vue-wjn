# vue-sbi

> 这是一个极端项目

##vue-cli 脚手架
  1.装包

    全局安装 webpack 和 webpack-cli

      npm i webpack webpack-cli -g
    全局安装 vue-cli 脚手架包

      npm i vue-cli -g
  2.使用脚手架命令新建一个webpack工程化的vue项目

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
  3.执行以上向导完成后, 会自动开始装包, 注意: 使用的是npm install, 速度可能会比较慢

    如果安装失败, 建议ctrl + C终止后执行cnpm i

  4.安装完成后所有的webpack配置都已配好, 注意: 但是所有的样式预处理loader都没有安装, 需要使用less   就安装less和less-loader, 无需自己配置, 只需要安装即可
##制作首页APP组件
1.完成header区域 ，使用的是Mint-UI中的Header组件
2.制作底部的Tabbar区域 使用的是MUI的Tabbar.html
  +在制作购物车小图标，要把扩展图标的css样式和扩展字体库，添加相对应的样式
3.要在中间区域放置一个router-view来展示路由匹配到的组件
##改造tabbar为router-link

##设置路由高亮
`linkActiveClass: 'mui-active'`

##点击tabbar中的路由链接，展示对应的路由组件
  1.路由链接  组件  对应的坑`<router-view></router-view>`
##制作首页轮播图布局

##加载首页轮播图数据
  1.获取数据 使用vue-resource  装包`cnpm i vue-resource -S`
  2.使用vue-resource的`this.$http.get`获取数据
  3.获取到的数据要保存到data身上
  4.使用v-for循环渲染每个item项
##给组件切换添加动画
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