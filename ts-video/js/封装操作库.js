"use strict";
/*

    功能：定义一个操作数据库的库，支持mysql mssql MongoDB

    要求：mysql mssql MongoDB 的功能一致，都有add update delete get

    注意：约束统一的规范 以及代码重用

    解决方案:需要约束规范 => 定义接口  代码重用 => 泛型

        1.接口：在面向对象的编程中，接口是一种规范的定义，定义了行为和动作的规范

        2.泛型：解决类 接口 方法 的复用性

*/
var list = [
    { id: 1, name: 'name_one', age: 18 },
    { id: 2, name: 'name_two', age: 19 },
    { id: 3, name: 'name_three', age: 20 },
    { id: 4, name: 'name_four', age: 21 },
    { id: 5, name: 'name_five', age: 22 },
    { id: 6, name: 'name_six', age: 23 }
];
// 定义一个操作mysql数据库的类  =>  要实现泛型接口 这个类也应该是个泛型类
// class MysqlDb implements DBI<T> 报错 =>  要实现泛型接口 这个类也应该是个泛型类
var MysqlDb = /** @class */ (function () {
    function MysqlDb() {
    }
    MysqlDb.prototype.add = function (info) {
        console.log(info);
        return true;
    };
    MysqlDb.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    MysqlDb.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    MysqlDb.prototype.get = function (id) {
        var result = [];
        list.map(function (item) {
            if (id == item.id) {
                result.push(item);
            }
        });
        return result;
    };
    return MysqlDb;
}());
var MssqlDb = /** @class */ (function () {
    function MssqlDb() {
    }
    MssqlDb.prototype.add = function (info) {
        console.log('-----MssqlDb-----', info);
        return true;
    };
    MssqlDb.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    MssqlDb.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    MssqlDb.prototype.get = function (id) {
        var result = [];
        list.map(function (item) {
            if (id == item.id) {
                result.push(item);
            }
        });
        return result;
    };
    return MssqlDb;
}());
// 操作用户表 定义user类和数据库表 做映射
var User_class = /** @class */ (function () {
    function User_class() {
    }
    return User_class;
}());
var user = new User_class();
user.username = '张三';
user.password = '123456';
var oMySql = new MysqlDb();
var oMsSql = new MssqlDb();
oMySql.add(user);
var data = oMsSql.get(2);
console.log(data);
// [ { id: 2, name: 'name_two', age: 19 } ]
