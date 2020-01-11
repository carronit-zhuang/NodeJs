  // 图书管理系统的入口文件
const express = require('express');
const app = express();
const path = require('path');
const template = require('art-template');
const bodyParser = require('body-parser');
const router = require('./router.js');
// 启动静态资源服务
app.use('/www',express.static('public'));
  // 设置模板的路径
app.set('views',path.join(__dirname,'views'));
  // 设置模板引擎
app.set('view engine','art');
// 使得express兼容art-template模板引擎
app.engine('art',require('express-art-template'));

// 挂载参数处理中间件（post）
app.use(bodyParser.urlencoded({ extended:false}));
// 处理json格式的参数
app.use(bodyParser.json());
// 配置路由
app.use(router);
// 监听端口
app.listen(3000,()=>{
    console.log('running...');
});