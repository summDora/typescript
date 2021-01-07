"use strict";
// 类装饰器：就是在类声明之前被声明（紧靠着类声明）
// 类装饰器应用于类构造函数，可以用来监视，修改或者替换类定义
// 被装饰的声明信息做为参数传入
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//      类装饰器 => 普通装饰器（不可传参）
function logClassA(params) {
    console.log(params);
    // 不可传参时 params 就是代表 当前类
    params.prototype.apiUrl = 'http://www.api.com';
    params.prototype.run = function () {
        console.log('装饰器的 run 方法');
    };
}
var classA = /** @class */ (function () {
    function classA() {
    }
    classA.prototype.Done = function () { };
    classA = __decorate([
        logClassA
    ], classA);
    return classA;
}());
var A = new classA();
console.log(A);
console.log(A.apiUrl);
//      类装饰器 => 装饰器工厂（可传参）
function logClassB(params) {
    return function (target) {
        console.log(params);
        console.log(target);
        target.prototype.apiUrl = params;
    };
    // 可传参时 target 就是代表 当前类
    // 可传参时 params 就是代表 传过来的参数
}
//      相当于把 http://www.classb.apiurl 给了params
//      下面的这个类 传给了 target
var classB = /** @class */ (function () {
    function classB() {
    }
    classB.prototype.done = function () { };
    classB = __decorate([
        logClassB('http://www.classb.apiurl')
    ], classB);
    return classB;
}());
var B = new classB();
console.log(B.apiUrl);
/*
    [Function: classA]
    classA {}
    http://www.api.com
    http://www.classb.apiurl
    [Function: classB]
    http://www.classb.apiurl
*/
/*
    疑问：
    1.类装饰器 在 重载 类构造函数时 需要将类所有已存在的构造函数全部写进去么
*/ 
