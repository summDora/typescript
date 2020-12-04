"use strict";
// 接口扩展：接口可以继承接口
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
var Person_class_1 = /** @class */ (function () {
    function Person_class_1(name) {
        this.name = name;
    }
    return Person_class_1;
}());
var Person_class_2 = /** @class */ (function () {
    function Person_class_2(name) {
        this.name = name;
    }
    Person_class_2.prototype.eat = function () {
        console.log(this.name + " \u5728\u5403\u4E1C\u897F");
    };
    Person_class_2.prototype.work = function () {
        console.log(this.name + " \u5728\u5DE5\u4F5C");
    };
    return Person_class_2;
}());
var child = new Person_class_2('任嘉伦');
child.eat();
child.work();
// 混合运用  继承了父类的 care  和  person接口的  eat work
var Person_class_father = /** @class */ (function () {
    function Person_class_father(name) {
        this.name = name;
    }
    Person_class_father.prototype.care = function () {
        console.log(this.name + " \u5728\u7167\u987E\u5B9D\u5B9D");
    };
    return Person_class_father;
}());
var Person_class_3 = /** @class */ (function (_super) {
    __extends(Person_class_3, _super);
    function Person_class_3(name) {
        return _super.call(this, name) || this;
    }
    Person_class_3.prototype.eat = function () {
        console.log(this.name + " \u5728\u5403\u4E1C\u897F");
    };
    Person_class_3.prototype.work = function () {
        console.log(this.name + " \u5728\u5DE5\u4F5C");
    };
    return Person_class_3;
}(Person_class_father));
var fater = new Person_class_3('任嘉伦');
fater.eat();
fater.work();
fater.care();
/*
    任嘉伦 在吃东西
    任嘉伦 在工作
    任嘉伦 在照顾宝宝
*/ 
