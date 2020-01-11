const db = require('./db.js');

exports.allBooks = (req,res) => {
    let sql = 'select * from book';
    db.base(sql,null,(results)=>{
       res.json(results);
    });
};

exports.addBook = (req,res) => {
    let info = req.body;
    let sql = 'insert into book set ?';
    db.base(sql,info,(results)=>{
        if(results.affectedRows ==1){
            res.json({flag:1});
        }else{
            res.json({flag:2});
        }
    });
};

exports.getBookById = (req,res) => {
    let id = req.params.id;
    let sql = 'select * from book where id = ?';
    let data = [id];
    db.base(sql,data,(results)=>{
        res.json(results[0]);
    });
};

exports.editBook = (req,res) => {
    let info = req.body;
    let sql = 'update book set name =?,author=?,category=?,description=? where id =?';
    let data = [info.name,info.author,info.category,info.description,info.id];
    db.base(sql,data,(results)=>{
       if(results.affectedRows == 1 ){
           res.json({flag:1});
       }else{
           res.json({flag:2});
       }

    });
};

exports.deleteBook = (req,res) => {
    let id = req.params.id;
    let sql = 'delete from book where id=?';
    let data = [id];
    db.base(sql,data,(results)=>{
        if(results.affectedRows == 1 ){
            res.json({flag:1});
        }else{
            res.json({flag:2});
        }
    });
};
