"use strict";
// ts中的类
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// function Person(name) {
//     this.name = name
//     this.run = function () {
//         console.log('es5中的类')
//     }
// }
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    // 构造函数 实例化类的时候 触发的方法
    // 接收 实例化参数
    // run() :string{
    //     return `${this.name}在运动`
    // }
    Person.prototype.run = function () {
        return this.name + " \u8FD0\u52A8ing ~";
    };
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.setName = function (name) {
        this.name = name;
    };
    Person.prototype.work = function () {
        return this.name + " \u5728\u5DE5\u4F5C ! ---father";
    };
    return Person;
}());
// var p = new Person('任嘉伦')
// p.run()
// console.log(p.getName()) //任嘉伦
// p.setName('嘉人')
// console.log(p.getName()) //嘉人
// ts中 实现继承 extends  super
// class Star{
//     name: string;
//     constructor(name: string) {
//         this.name=name
//     }
//     run(): string{
//         return `${this.name} 运动ing ~`
//     }
// }
// class LitterStar extends Star{
//     constructor(name: string) {
//         super(name)
//     }
// }
// let ls = new LitterStar('rjl')
// console.log(ls)
// console.log(ls.run())
var Webs = /** @class */ (function (_super) {
    __extends(Webs, _super);
    function Webs(value) {
        return _super.call(this, value) || this;
        // 初始化父类的构造函数
    }
    return Webs;
}(Person));
var a = new Webs('继承任嘉伦');
console.log(a);
console.log(a.run());
console.log(a.getName());
// ts中 继承的探讨 父类的方法 和 子类的方法一致
var Second = /** @class */ (function (_super) {
    __extends(Second, _super);
    function Second(name) {
        return _super.call(this, name) || this;
    }
    Second.prototype.work = function () {
        return this.name + " is working ! ---son";
    };
    return Second;
}(Person));
var se = new Second('任嘉伦');
console.log(se.work()); //任嘉伦 is working ! ---son
// 如果子类 和 父类 方法名一致，会 优先 选择 子类 的方法去执行
