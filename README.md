# Readme
react-native 项目模板。集成了 typescript。内置了简单的页面骨架。开箱即用
before we start the project ,we should run cd ios and arch -x86_64 pod install in m1(Mac)

## 安装 & 环境搭建
请先阅读[react-native 安装指南](https://www.reactnative.cn/docs/environment-setup)

## 项目目录结构
```js
├── android                         # 安卓工程文件
├── ios                             # iOS工程文件
├── src
│   ├── assets                      # 静态资源文件  
│   │   ├──icon-image
│   │   │   ├──  images
│   │   │   ├──  const.ts
│   │   │   ├──  images.ts
│   ├── component                   # 项目组件
│   │   ├── demo
│   │   │   ├──  const.ts           # 组件枚举及接口文件
│   │   │   ├──  index.tsx          # 组件view层
│   │   │   ├──  styles.ts          # 组件样式层
│   ├── contexts                    # 全局上下文文件
│   │   ├── global.context.ts
│   ├── enums                       # 枚举文件
│   │   ├── demoEnum.ts
│   ├── hooks                       # 业务通用hooks文件
│   │   ├── useDemo.ts
│   ├── layout                      # 通用布局
│   │   ├── StackLayout.tsx
│   ├── pages                       # 业务页面入口和常用模板
│   │   ├── demo
│   │   │   ├── const.ts
│   │   │   ├── index.tsx
│   │   │   ├── styles.ts
│   │   │   ├── viewModel.ts
│   ├── request                     # 业务请求
│   ├── routes                      # 页面路由
│   │   ├── const.ts
│   │   ├── index.ts
│   ├── styles                      # 通用样式文件
│   │   ├── theme.ts
│   ├── utils                       # 工具库
│   │   ├── easyFunction.ts
│   ├── config.ts                   # 项目通用配置
│   ├── global.d.ts                 # 全局声明文件
├── eslintrc.js                     # 规则文件
├── App.tsx                         # 项目入口文件
├── babel.config.js                 # 编译文件
├── package.json                    
├── tsconfig.json
```

## Route
### react navigation 
我们只需要了解关于Stack.Navigator的一个属性，即initialRouteName，这个属性将会改变初始页面

### moving between screens
我们可以使用the navigation prop 在我们的screen components之间跳转
另外一个我们需要注意的点是当我们跳转到相同页面的时候，默认不会发生任何事，但是我们可以push navigate去更改这个行为
这允许我们表达添加另一个路由的意图，而不管现有的导航历史，每一次你push我们都会添加一个新的route在页面栈中

### going back
有时你希望能够通过编程去触发back的行为，那么你可以使用navigation.goBack()

### passing parameters to routes
这里有两种做法可以传递params
1: navigation.navigate function : navigation.navigate('routename',{/** params go here */})
2: read the params in your screen component: route.params, for example: const { otherparams } = route.params

### how to add routes
我们需要在routes文件夹下的const,index添加相应的文件路径即可

## 说明
- config文件下暂时区分了生产环境以及测试环境，可在文件下修改你要使用的baseURl
- 项目中封装了简易的axios请求，使用时仅需要使用get('')即可
- 前端工程中添加了对应枚举的文件夹，可参照example编写对应的 enum 及其映射的文字，为了规范前端工程，请尽量使用枚举约束
- global.context是全局上下文，你可以在这里存放一些全局的变量数据

## 内置组件
1. 多语言
2. 本地缓存（async）
3. 基础的动画组件
4. 毛玻璃特效
5. 图表功能
6. 获取设备信息
7. 选取本地图片
8. 线性渐变
9. swiper
10. video
11. toast
12. tab-navigator
13. classnames
14. dayjs
15. tab-bar
16. navigation

## 内置函数库
1. useSuperLock - 超级钩子锁，当接口有返回值时才会触发下一个行为
2. useCallBackState - 返回一个带缓存的state

## 内置帮助方法
1. 获取是否是有刘海屏的手机，比如iPhonexr系列的手机DOM是区别于正常安卓手机的
2. 获取底部安全距离，是否该手机有安全区
3. guid()生成唯一标识，用于key值的绑定
4. sleep睡眠函数，用于异步函数的延迟触发

## 开发
// 启动ios
yarn ios

// 启动Android
yarn android

## 其它命令
// 清理安卓缓存
yarn android-clean

// 链接安卓，用于重启断连到重链，不建议使用 ip 链接，因为下载 js 包通过路由真到很慢
yarn reverse

// ios安装流程
yarn pod (M1)

