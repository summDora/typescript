"use strict";
/*
    泛类：泛型可以帮助我们避免重复的代码 以及 对不特定数据类型的支持 （类型校验）

    示例：把类当做参数的泛型类
    1.定义一个类
    2.把类当做参数 来约束 数据传入的类型
*/
/*
    定义一个user类  =>  作用：映射数据库字段
    定义一个MysqlDB类  =>  作用：操作数据库
    把 user类 作为参数 传入到 MysqlDB 中
*/
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var MysqlDB = /** @class */ (function () {
    function MysqlDB() {
    }
    // 把类当做参数 来约束 数据传入的类型
    MysqlDB.prototype.add = function (user) {
        console.log(user);
        return true;
    };
    MysqlDB.prototype.addArticle = function (info) {
        console.log(info);
        return true;
    };
    return MysqlDB;
}());
var u = new User();
u.username = '任嘉伦';
u.password = '123456';
var db = new MysqlDB();
db.add(u);
// User { username: '任嘉伦', password: '123456' }
var ArticleCate = /** @class */ (function () {
    function ArticleCate() {
    }
    return ArticleCate;
}());
var article = new ArticleCate();
article.title = '国内';
article.desc = '国内新闻';
article.status = 1;
db.addArticle(article);
// ArticleCate { title: '国内', desc: '国内新闻', status: 1 }
// 操作数据库的泛型类
var MysqlDBT = /** @class */ (function () {
    function MysqlDBT() {
    }
    // 把类当做参数 来约束 数据传入的类型
    MysqlDBT.prototype.add = function (info) {
        console.log(info);
        return true;
    };
    return MysqlDBT;
}());
// MysqlDBT 增加数据
var UserT = /** @class */ (function () {
    function UserT() {
    }
    return UserT;
}());
var ut = new UserT();
ut.username = 'summer';
ut.password = '12345';
// var dbt = new MysqlDBT();
// dbt.add(ut) // UserT { username: 'summer', password: '12345' }
// dbt.add('xxxxxx') // xxxxxx
var dbt = new MysqlDBT();
dbt.add(ut); // UserT { username: 'summer', password: '12345' }
dbt.add('xxxxxx'); // 类型“string”的参数不能赋给类型“User”的参数
