"use strict";
// ts中的抽象类：提供其他类继承的 基类，不能直接被实例化
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
// 用abstract关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体实现并且必须在派生类中实现
// abstract 抽象方法只能放在抽象类里面
// 抽象类和抽象方法来定义标准
// 标准 => Animal 类  要求他的子类必须包含 eat 方法
// class Animal{
//     abstract eat(): any
//     // 抽象方法只能出现在抽象类中
// }
// abstract class Animal_abstract{
//     abstract eat(): any
// }
// var a = new Animal_abstract()
// 错误写法
// 无法创建抽象类的实例
// abstract class Animal_abstract{
//     abstract eat(): any
// }
// class Dog_abstrat extends Animal_abstract{
//     // 非抽象类 Dog_abstrat 不会实现继承自 Animal_abstract 类的抽象成员 eat
//     // 抽象类的子类 必须实现 抽象类中的 抽象方法
// }
var Animal_abstract = /** @class */ (function () {
    function Animal_abstract(name) {
        this.name = name;
    }
    return Animal_abstract;
}());
var Dog_abstrat = /** @class */ (function (_super) {
    __extends(Dog_abstrat, _super);
    function Dog_abstrat(name) {
        return _super.call(this, name) || this;
    }
    Dog_abstrat.prototype.eat = function () {
        return this.name + '吃骨头';
    };
    return Dog_abstrat;
}(Animal_abstract));
var dogs = new Dog_abstrat('Hba');
console.log(dogs.eat());
