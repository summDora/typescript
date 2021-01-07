"use strict";
// 模块引入
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var db_1 = require("./db");
// 外部调用
db_1.getData();
var data = db_1.getData();
console.log(data);
db_1.save();
/*
    获取数据
    获取数据
    [ { title: '标题' }, { desc: '描述' } ]
    保存数据成功
*/
// 暴露的第二种方式 + as的用法 重命名
var db_2 = require("./db");
db_2.a();
db_2.b();
console.log(db_2.c);
/*
    暴露的数据a
    暴露的数据b
    xxxxx
*/
// 暴露的第三种方式
var db_3 = __importDefault(require("./db"));
db_3.default();
// 报错
// import export_default  ed from './db';
// ed()
// import export_default_as as eda from './export_defalut_as'
// eda()
/*
    export default
*/
// 浏览器默认不支持 export import require
// node运行
