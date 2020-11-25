"use strict";
// ts定义属性的时候 给我们提供了三种修饰符
/*
    public：公有         在类里面、子类、类外面 都可以访问
    protected：保护类型  在类里面、子类里面可以访问，在类外部无法访问
    private：私有        在类里面可以访问，子类、类外部 不可访问

    属性如果不加修饰符 默认就是 public
*/
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
/* ------------  public  ----------- */
var Father = /** @class */ (function () {
    function Father(name) {
        this.name = name;
    }
    Father.prototype.run = function () {
        return this.name + " \u5728\u8FD0\u52A8 ";
        // public 类 内部访问 √
    };
    return Father;
}());
var Son = /** @class */ (function (_super) {
    __extends(Son, _super);
    function Son(name) {
        return _super.call(this, name) || this;
    }
    Son.prototype.work = function () {
        return this.name + " \u5728\u5DE5\u4F5C ";
        // public 子类访问 √
    };
    return Son;
}(Father));
var son = new Son('son');
console.log(son.work()); //son 在工作
var father = new Father('father');
console.log(father.run());
console.log(father.name); // fahter
// public 类 外部访问 √
/* ------------  protected  ----------- */
var Mather = /** @class */ (function () {
    function Mather(name) {
        this.name = name;
    }
    Mather.prototype.run = function () {
        return this.name + " \u5728\u8FD0\u52A8 ---- protected";
        // protected 类 内部访问 √
    };
    return Mather;
}());
var Daughter = /** @class */ (function (_super) {
    __extends(Daughter, _super);
    function Daughter(name) {
        return _super.call(this, name) || this;
    }
    Daughter.prototype.work = function () {
        return this.name + " \u5728\u5DE5\u4F5C  ---- protected";
        // protected 子类访问 √
    };
    return Daughter;
}(Mather));
var daughter = new Daughter('daughter');
console.log(daughter.work());
//daughter 在工作  ---- protected
var mather = new Mather('mather');
console.log(mather.run());
console.log(mather.name); // 属性“name”受保护，只能在类“Mather”及其子类中访问
// protected 类 外部访问 X
/* ------------  private  ----------- */
var Parent = /** @class */ (function () {
    function Parent(name) {
        this.name = name;
    }
    Parent.prototype.run = function () {
        return this.name + " \u5728\u8FD0\u52A8 ---- private";
        // protected 类 内部访问 √
    };
    return Parent;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child(name) {
        return _super.call(this, name) || this;
    }
    Child.prototype.work = function () {
        return this.name + " \u5728\u5DE5\u4F5C  ---- protected";
        // 属性“name”为私有属性，只能在类“Parent”中访问
        // private 子类访问 ×
    };
    return Child;
}(Parent));
var pa = new Parent('parent');
console.log(pa.run());
console.log(pa.name); //属性“name”为私有属性，只能在类“Parent”中访问
// private 类 外部访问 X
