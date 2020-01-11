
 // 实现图书管理系统的后台restful接口

const express = require('express');
const app = express();
const router = require('./router.js');
const bodyParser = require('body-parser');
// 处理post提交的表单格式
app.use('/www',express.static('public'));
 app.use(bodyParser.urlencoded({ extended:false}));
 // 处理json格式的参数
 app.use(bodyParser.json());
app.use(router);
app.listen(3000,()=>{
    console.log('running...');
})

