// 业务模块
const data = require('./data.json');
const path = require('path');
const fs = require('fs');
const db = require('./db.js');
// 自动生成图书的编号然后自增
// let maxBookCode = ()=>{
//     let arr = [];
//     data.forEach((item)=>{
//         arr.push(item.id);
//     });
//     return Math.max.apply(null,arr);
// }


// 把内存的数据写入文件
// let writeDataToFile = (res) => {
//     // 把内存中的数据写入文件
//     fs.writeFile(path.join(__dirname,'data.json'),JSON.stringify(data,null,4),(err)=>{
//         if(err){
//             res.send('server error');
//         }
//         // 文件写入成功之后重新返回主界面
//         res.redirect('/');
//     });
// }

// 渲染主页面
exports.showIndex = (req,res)=>{
    let sql = 'select * from book';
    db.base(sql,null,(results)=>{
    res.render('index',{list:results});
});
    // res.render('index',{list:data});
}
// 跳转到添加图书的页面
exports.toAddBook = (req,res)=>{
    res.render('addBook',{})
}

// 添加图书并保存
exports.addBook = (req,res)=>{
    // 获取表单的数据
    let info = req.body;
    let book = {};
    for(let key in info){
        book[key] = info[key];
    }
    let sql = 'insert into book set ?';
    db.base(sql,book,(results)=>{
        if(results.affectedRows == 1){
            res.redirect('/');
        }
    });


    // book.id = maxBookCode() + 1;
    // data.push(book);
    // // 把内存中的数据写入文件之中
    // writeDataToFile(res);
}
// 跳转到编辑图书的页面
exports.toEditBook = (req,res)=>{
    let id = req.query.id;
    // let book = {};
    let sql = 'select * from book where id =?';
    let data = [id];
    db.base(sql,data,(results)=>{
        res.render('editBook',results[0]);
    })
    // data.forEach((item)=>{
    //     if(id == item.id){
    //         book = item;
    //         return;
    //     }
    // });
    // res.render('editBook',book);

}

exports.editBook =(req,res)=> {
    let info = req.body;
    let sql = 'update book set name=?,author=?,category=?,description=? where id=?';
    let data = [info.name,info.author,info.category,info.description,info.id];
    db.base(sql,data,(results)=>{
        if (results.affectedRows ==1 ){
            res.redirect('/');
        }
    });


    // data.forEach((item) => {
    //     if (info.id == item.id) {
    //         for (let key in info) {
    //             item[key] = info[key];
    //         }
    //         return;
    //     }
    // });
    // 把内存中的数据写入文件
    // writeDataToFile(res);
}

exports.deleteBook = (req,res)=>{
    let id = req.query.id;
    let sql = 'delete from book where id =?';
    let data = [id];
    db.base(sql,data,(results)=>{
        if (results.affectedRows == 1){
            res.redirect('/');
        }
    });

    // data.forEach((item,index)=>{
    //     if(item.id == id){
    //         // 删除数组的一项数据
    //         data.splice(index,1);
    //     }
    // });
    // // 把内存中的数据写入文件
    // writeDataToFile(res);
}
