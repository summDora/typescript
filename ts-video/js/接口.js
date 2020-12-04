"use strict";
/*
-------------------------
接口的作用：在面向对象的编程中，接口是一种规范的定义
它定义了行为和动作的规范，
在程序设计里面，接口起到了一种限制和规范的作用

接口定义了某一批类所需遵守的规范，
接口不关心这些类的内部状态数据，也不关心这些类里方法的实现细节，
它只规定这批类里必须提供某些方法，
提供这些方法的类就可以满足实际需要

ts中的接口类似于java，同时增加了更灵活的接口类型
包括 属性、函数、可索引、类类型
-------------------------
*/
// 1.属性接口 -----------对json的约束
// ts自定义方法
// 对传入的json参数进行约束
function print(labelform) { }
print('hhh'); //错误写法
print({ name: 'hhhh' }); //错误写法
print({ label: 123 }); //错误写法
print({ label: '123' }); //正确写法
function printName(name) {
    // 必须传入对象 firstName secondName
    console.log(name.firstName + "---" + name.secondName);
}
printName({ firstName: '任', secondName: '嘉伦', age: 20 });
// 对象文字可以只指定已知属性，并且“age”不在类型“FullName”中
var obj = {
    firstName: '任', secondName: '嘉伦', age: 20
};
printName(obj);
// 将参数单拎出去 可增加 接口规定以外的 参数
// 但是传入的参数必须 包括 接口规定的 参数
// 参数必须有，类型必须对应，顺序可以不一致
function printAnimal(info) {
    console.log(info.firstName + "~~~~" + info.secondName);
}
printAnimal({ firstName: 'big', secondName: 'cat' });
// 原生js封装的ajax
function ajax(config) {
    var xhr = new XMLHttpRequest();
    xhr.open(config.type, config.url, true);
    xhr.send(config.data);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log('success');
            if (config.dataType == 'json') {
                var str = JSON.parse(xhr.responseText);
                console.log(str);
            }
            else {
                console.log(xhr.responseText);
            }
        }
    };
}
var md5 = function (key, value) {
    return key + value;
};
console.log(md5('namestring', 'valuestring'));
var hanshu = function (one, sec) {
    return one + "-----" + sec;
};
console.log(hanshu('namestring', 'valuestring'));
// 3.可索引接口  ------对数组和对象的约束 （不常用）
// [index:number] 为数组  [index:string] 为对象
var arr = [12, '34', true];
var arr1 = [1, 2, 3, 4];
var arr2 = ['1', '2', '3', '4'];
var arr3 = ['1', '2', '3', '4'];
console.log(arr3[2]); //3
// 正确写法
var arr4 = [1, 2, 3, 4];
var userobj = { name: 'ren', nickname: 'guochao' };
console.log(userobj);
var Dogs = /** @class */ (function () {
    function Dogs(name) {
        this.name = name;
    }
    return Dogs;
}());
var Cats = /** @class */ (function () {
    function Cats() {
    }
    // 类型 "Cats" 中缺少属性 "name"，但类型 "Animals" 中需要该属性
    // 错误写法
    Cats.prototype.eat = function () { };
    return Cats;
}());
var Fishes = /** @class */ (function () {
    function Fishes(name) {
        this.name = name;
    }
    Fishes.prototype.eat = function (food) {
        console.log(this.name + " \u5403 " + food);
    };
    return Fishes;
}());
var f = new Fishes('小鱼儿');
f.eat('虾米');
// 小鱼儿 吃 虾米
