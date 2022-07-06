# 用CSS画一个哆啦A梦

这个是我为了博客单独开的一个仓库，方便不太熟悉node的朋友使用。

## 普通文件访问

1. 下载

直接下载后解压 （二选一）
![1.png](https://i.loli.net/2020/04/09/DYNRqOMWnCxUQGZ.png)

或 通过git拉取代码 （二选一）
```
git clone https://github.com/adnabb/myDoraemon.git
```

2. 使用
   
打开index.html文件，点击播放便可以看到一点一点画出来的哆啦A梦啦！

## 本地web服务器访问

如果你想通过web服务器访问的话，可以参考以下方法：

1. 我的另一个用parcel打包的仓库
   
   仓库地址：https://github.com/adnabb/doraemon

   ```
    // 下载
    git clone https://github.com/adnabb/doraemon.git
    // 安装相关依赖
    yarn install
    // 启动
    yarn start
   ```

2. 使用静态服务器打开当前页面

在npm仓库我有发布一个node制作的静态服务器，欢迎大家捧场，当然也推荐使用其他开源工具啦！

1. 全局安装 static-server-via-node
```
yarn global add static-server-via-node
```

2. 下载doraemon代码库

```
git clone https://github.com/adnabb/myDoraemon.git
```

3. 命令行进入doraemon 文件夹，最后启动服务
```
// 进入 doraemon 文件夹
cd doraemon

// 输入static命令启动
static
```