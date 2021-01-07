"use strict";
// 变量
Object.defineProperty(exports, "__esModule", { value: true });
exports.c = exports.b = exports.a = exports.save = exports.getData = void 0;
var dbUrl = 'xxxxxx';
// 获取数据库里的数据
function getData() {
    console.log('获取数据');
    return [
        {
            title: '标题'
        },
        {
            desc: '描述'
        },
    ];
}
exports.getData = getData;
// 保存数据
function save() {
    console.log('保存数据成功');
}
exports.save = save;
// 暴露的第二种方式
function a() { console.log('暴露的数据a'); }
exports.a = a;
function b() { console.log('暴露的数据b'); }
exports.b = b;
var c = 'xxxxx';
exports.c = c;
// 暴露的第三种方式 export default 用法（一个模块只能用一次）
function export_default() { console.log('export default'); }
exports.default = export_default;
