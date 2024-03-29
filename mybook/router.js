// 路由模块
const express = require('express');
const router = express.Router();
const service = require('./service.js');
// 路由处理

// 渲染主页
router.get('/',service.showIndex);
// 跳转到添加图书的页面
router.get('/toAddBook',service.toAddBook);
// 提交表单，添加图书
router.post('/addBook',service.addBook);
// 跳转到编辑图书的信息页面
router.get('/toEditBook',service.toEditBook);
// 编辑图书提交表单
router.post('/editBook',service.editBook);
// 删除图书的信息
router.get('/deleteBook',service.deleteBook);

module.exports = router;