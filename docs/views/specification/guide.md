---
title: GUIDE
date: 2020-03-26
tags:
 - vuepress
categories:
 - 前端
isShowComments: true
sidebar: false
publish: true
sticky: 1
---

<Boxx/>

开始使用此博客的一些注意事项和说明。

[[toc]]

<!-- more -->

- 本仓库由vuepress和主题reco自我美化构建而来，代码使用 [MIT](https://github.com/SigureMo/notev/blob/master/LICENSE) 协议进行开源<br/>
但是全部文档内容使用 [CC 4.0 BY-SA](https://creativecommons.org/licenses/by-sa/4.0/) 协议进行发布（注明出处）

- 已全局适配`手机模式`和`暗黑模式（iOS自适应）`请自行体验


![](/znote/vuepress/znote.png)

## 项目介绍

- 知识点复习和面试总结（不断完善中，欢迎加入！）
- 技术栈知识点笔记总结（知识小结）
- 个人牢骚发布点（生活随笔）
- 其它...

## 项目架构

- 采用vuepress和主题reco构建

```lua
##需要自己写主题样式的话，在.vuepress/ 下新建theme文件夹并按如下目录布局
Dev
├─── docs
│   └── .vuepress   // 配置目录
│   │    ├── public // 静态资源
│   │    ├── theme  // 主题
│   │    │   ├── components // 组件
│   │    │   ├── global-components // 全局组件
│   │    │   ├── layouts // 布局(包括首页在内)
│   │    │   ├── styles  // 样式
│   │    │   ├── util 	 // 工具
│   │    │   ├── index.js // 入口配置
│   │    │   ├── noopModule.js // 依赖注入
│   │    │   ├── package.json  // 主题依赖
│   │    │   ├── README.md     // 主题说明
│   │    └── config.js
│   ├── about   // 项目模块
│   ├── views   // 项目模块
│   └── README.md   // 首页
└── package.json //项目依赖
```

## 项目运行

- 在项目文件夹下执行命令，加载依赖：`npm install`
- 在项目文件夹下执行命令，运行项目：`npm run docs:dev`
- 待启动成功后打开地址即可：[http://localhost:8080/xxxx/](http://localhost:8080/xxxx/)

## 开始编写markdown

- 参考示例：

```yaml
---
title: 文章标题
date: 2020-02-02
tags:
 - 标签
categories:
 - 分类
keys:
 - '123456' //文章加密密码
sticky: 1   //文章置顶 1, 2, 3, ...
isShowComments: false //是否开启评论
publish: true //文章是否发布
---

<Boxx/> //随机展示名人名言

[[toc]] //目录链接

- 这里可以写`摘要`等其它

<!-- more --> //在<!-- more -->之前的内容会展示为文章摘要

## 正式开始你的markdown

- I am the text...
```

## 写在最后

如果在博客中遇到什么问题，不要一上来就问我，我对那些不经过自己思考的人很反感，毕竟自己动手找出来的东西才能深入理解、印象深刻。

推荐先去以下几个网址找答案：

- vuepress官网：[https://vuepress.vuejs.org/zh/](https://vuepress.vuejs.org/zh/)
- vuepress自定义开发主题：[https://vuepress.vuejs.org/zh/theme/writing-a-theme.html](https://vuepress.vuejs.org/zh/theme/writing-a-theme.html)
- vuepress-theme-reco官网：[https://vuepress-theme-reco.recoluan.com/](https://vuepress-theme-reco.recoluan.com/)

## 关于友链

近期也发现有好些人要加友链的，在这里我也说一下吧

你可以复用我的blog，但是**你需要在你的blog创新一些东西**，尽量和每个人都不一样，然后我给你加友链。毕竟千篇一律的友链没有必要是吧！