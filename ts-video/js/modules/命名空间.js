"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var A;
(function (A) {
    var Dog = /** @class */ (function () {
        function Dog(theName) {
            this.name = theName;
        }
        Dog.prototype.eat = function () {
            console.log(this.name + " \u5728\u5403\u72D7\u7CAE");
        };
        return Dog;
    }());
    A.Dog = Dog;
})(A || (A = {}));
var B;
(function (B) {
    var Dog = /** @class */ (function () {
        function Dog(theName) {
            this.name = theName;
        }
        Dog.prototype.eat = function () {
            console.log(this.name + " \u5728\u5543\u9AA8\u5934");
        };
        return Dog;
    }());
    B.Dog = Dog;
})(B || (B = {}));
var aDog = new A.Dog('A DOG');
aDog.eat();
var bDog = new B.Dog('B DOG');
bDog.eat();
/*

    A DOG 在吃狗粮
    B DOG 在啃骨头

*/
/*

    命名空间的 暴露 与 引入
    export namespace C{ }
    import { C } from 'xxxxxxx'

*/ 
