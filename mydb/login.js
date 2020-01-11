// 登陆验证（前端+后端+数据库）
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./db.js');

app.use(bodyParser.urlencoded({ extended:false}));
// 处理json格式的参数



app.use(bodyParser.json());
app.use(express.static('public'));
app.post('/check',(req,res)=>{
    let param = req.body;
    let sql = 'select count(*) as total from user where username=? and password =?';
    let data = [param.username,param.password];
    db.base(sql,data,(results)=>{
        if(results[0].total ==1){
            res.send('login success!');
        }else{
            res.send('login failure');
        }
    });
});

app.listen(3000,()=>{
    console.log('running...');
})