"use strict";
/*
    属性装饰器：

        属性装饰器表达式会在运行时当作函数被调用，传入下列两个参数：
        1.对于静态成员来说是类的构造函数，对于实例成员来说是类的原型对象
        2.成员的名字
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var shuxing;
(function (shuxing) {
    // 类装饰器
    function logClassB(params) {
        return function (target) {
            target.prototype.apiUrl = params;
        };
    }
    // 属性装饰器
    function logProperty(params) {
        return function (target, attr) {
            console.log(target);
            console.log(attr);
            /*
                name_one { getUrl: [Function] }
                url
            */
            target[attr] = params;
        };
    }
    var name_one = /** @class */ (function () {
        function name_one() {
        }
        name_one.prototype.getUrl = function () {
            console.log(this.url);
        };
        __decorate([
            logProperty('http://www.logClass.com')
        ], name_one.prototype, "url", void 0);
        name_one = __decorate([
            logClassB('xxxx')
        ], name_one);
        return name_one;
    }());
    shuxing.name_one = name_one;
})(shuxing || (shuxing = {}));
// 注意  命名空间暴露出来的 变量 在使用的时候 需要加上 空间名称
console.log(shuxing.name_one);
var name_one_eg = new shuxing.name_one();
console.log(name_one_eg.url);
name_one_eg.getUrl();
/*
    name_one { getUrl: [Function] }
    url
    [Function: name_one]
    http://www.logClass.com
    http://www.logClass.com
*/
