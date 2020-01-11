// 插入数据

// 加载数据库的驱动
var mysql      = require('mysql');
// 创建数据库连接
var connection = mysql.createConnection({
    host     : 'localhost',  /*数据库所在的服务器的域名或者IP地址*/
    user     : 'root',        /*登录数据库的账号*/
    password : '',             /*登录数据库的密码*/
    database : 'book'          /*数据库的名称*/
});

let sql = 'insert into book set ?'
let data = {
    name : '明朝那些事',
    author : '当年明月',
    category : '文学',
    description : '明朝的历史'
}

// 执行连接操作
connection.connect();
// 操作数据库
connection.query(sql,data, function (error, results, fields) {
    if (error) throw error;
    if(results.affectedRows > 0 ){
        console.log('数据插入成功！');
    }
});
// 关闭数据库
connection.end();