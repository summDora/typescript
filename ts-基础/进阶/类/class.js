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
// 使用 class 定义类，使用 constructor 定义构造函数
// 通过 new 生成新实例的时候，会自动调用构造函数
// 不允许存在多个构造函数实现
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
        this.type = 'cat';
    }
    ;
    Animal.prototype.sayHi = function () {
        return "my name is " + this.name;
    };
    Object.defineProperty(Animal.prototype, "name", {
        get: function () {
            return 'Jack';
        },
        set: function (value) {
            console.log('setter: ' + value);
        },
        enumerable: false,
        configurable: true
    });
    Animal.judAnimal = function (item) {
        return item instanceof Animal;
    };
    return Animal;
}());
var a = new Animal('aaa');
console.log(a);
console.log(a.sayHi());
// Animal { name: 'aaa', type: 'cat' }
// my name is aaa
// 继承 =>
// 使用 extends 关键字实现继承 =>
// 子类中使用 super 关键字来调用 父类的构造函数和方法
var Fish = /** @class */ (function (_super) {
    __extends(Fish, _super);
    function Fish(name) {
        var _this = _super.call(this, name) || this;
        console.log(_this.name);
        // FISH
        console.log(_this);
        return _this;
        // Fish { name: 'FISH', type: 'cat' }
    }
    ;
    Fish.prototype.sayHi = function () {
        return "hello i am extends animal - " + this.name;
    };
    return Fish;
}(Animal));
var b = new Fish('FISH');
console.log(b);
console.log(b.sayHi());
// Fish { name: 'FISH', type: 'cat' }
// hello i am extends animal - FISH
// 存取器
var c = new Animal('ccc');
c.name = 'cname';
console.log(c.name);
// 静态方法 static
// 不需要实例化，而是直接通过类来调用
var d = new Animal('ddd');
Animal.judAnimal(d);
d.judAnimal(d);
// 属性 "judAnimal" 不是类型为 "Animal" 的静态成员
// Property 'judAnimal' is a static member of type 'Animal'
// 三种访问修饰符（Access Modifiers），分别是 public、private 和 protected
// public 修饰的属性或方法是公有的，可以在任何地方被访问到（默认）
// private 修饰的属性或方法是私有的，不能在声明它的类的外部访问，不允许子类访问
// protected 修饰的属性或方法是受保护的，区别是它在子类中也是允许被访问的
var TypeAnimal = /** @class */ (function () {
    function TypeAnimal(name, nickname, sex) {
        this.name = name;
        this.nickname = nickname;
        this.sex = sex;
    }
    return TypeAnimal;
}());
var A_Animal = /** @class */ (function (_super) {
    __extends(A_Animal, _super);
    function A_Animal(name, nickname, sex) {
        var _this = _super.call(this) || this;
        console.log(_this.name, 'A_Animal');
        console.log(_this.nickname, 'A_Animal');
        // 属性“nickname”为私有属性，只能在类“TypeAnimal”中访问
        console.log(_this.sex, 'A_Animal');
        return _this;
    }
    return A_Animal;
}(TypeAnimal));
// 当构造函数修饰为 private 时，该类不允许被继承或者实例化
// 使用 private 修饰的属性或方法，在子类中也是不允许访问的
// 当构造函数修饰为 protected 时，该类只允许被继承
// 使用 protected 修饰的属性或方法，则允许在子类中访问
