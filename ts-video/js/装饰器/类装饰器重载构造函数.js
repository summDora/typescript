"use strict";
/*
    重载构造函数：

        类装饰器表达式会在运行时被当做函数被调用，类的构造函数作为其唯一的参数
        如果类装饰器返回一个值，他会使用提供的构造函数来替换类的声明
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// function logClass(params: any) {
//     console.log(params)
//     return class extends params{
//         apiUrl: any = '我是类修饰器更改后的url'
//     }
// }
/*
    不写 geturl() 方法 报错 =>
    类型 "(Anonymous class)" 中缺少属性 "getUrl"=>
    类型 "name_one" 中需要该属性
*/
function logClass(params) {
    console.log(params);
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.apiUrl = '我是类修饰器更改后的url';
            return _this;
        }
        class_1.prototype.getUrl = function () {
            this.apiUrl = "-----" + this.apiUrl + "------";
            console.log(this.apiUrl);
        };
        return class_1;
    }(params));
}
var name_one = /** @class */ (function () {
    function name_one() {
        this.apiUrl = '我是构造函数内的url';
    }
    name_one.prototype.getUrl = function () {
        console.log(this.apiUrl);
    };
    name_one = __decorate([
        logClass
    ], name_one);
    return name_one;
}());
var one = new name_one();
one.getUrl();
/*
    我是构造函数内的url

        [Function: name_one]
    -----我是类修饰器更改后的url------
*/
/*
    疑问：
    1.
    Q:   类装饰器 在 重载 类构造函数时 需要将类所有已存在的构造函数全部写进去么
    A:  是的 需要重载所有的属性和方法

*/ 
