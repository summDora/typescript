"use strict";
// 函数的定义
// es5中函数的定义
//  函数声明法
function run() { }
//  匿名函数
var run2 = function () { };
// ts中函数的定义
// 函数声明法
function run3() {
    return 'string';
}
// 错误写法
function run4() {
    return 123;
    // 不能将类型“number”分配给类型“string”
}
// 匿名函数
var run5 = function () {
    return 123;
};
// ts中定义方法传参
function getCanshu(name, age) {
    return name + "----" + age;
}
// 没有返回值的方法
function noReurn() {
    console.log('no return');
}
// 方法的可选参数
// es5中的方法和实参可以不一样,但是ts中必须一样,如果不一样就需要配置可选参数
function getAge(name, age) {
    if (age) {
        return name + "----" + age;
    }
    else {
        return name + "----\u5E74\u9F84\u4FDD\u5BC6";
    }
}
console.log(getAge('zhangsan', 22));
console.log(getAge('zhangsan'));
// 注意:可选参数必须配置到参数的最后面
// 必选参数不能位于可选参数后
function getName(name, age) { }
// 默认参数
// es5中没有默认参数 es6和ts中都可以设置默认参数
// es6
function morencanshues6(name, age) {
    if (name === void 0) { name = 'renjialun'; }
    if (age === void 0) { age = 31; }
}
// ts
function morencanshuts(name, age) {
    if (name === void 0) { name = 'fanghongling'; }
    if (age === void 0) { age = 22; }
    if (age) {
        return name + "----" + age;
    }
    else {
        return name + "----\u5E74\u9F84\u4FDD\u5BC6";
    }
}
// 剩余参数
function sum(a, b, c, d) {
    return a + b + c + d;
}
sum(1, 2, 3, 4);
// 三点运算符 接受形参传过来的值
function sumts() {
    var result = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        result[_i] = arguments[_i];
    }
    var sum = 0;
    // sumts.map(item=>sum+=item)
    result.map(function (item) { sum += item; });
    return sum;
}
var tssum = sumts(1, 2, 3, 4, 5, 6, 7, 8);
console.log("tssum\u7684\u503C\u4E3A:" + tssum);
function getInfo(str) {
    if (typeof str === 'string') {
        return 'my name is : ' + str;
    }
    else {
        return 'my age is : ' + str;
    }
}
console.log(getInfo('张三'));
console.log(getInfo(20));
// my name is : 张三
// my age is : 20
// console.log(getInfo(true));
//   没有与此调用匹配的重载。
//   第 1 个重载(共 2 个)，“(name: string): string”，出现以下错误。
//   类型“boolean”的参数不能赋给类型“string”的参数。
//   第 2 个重载(共 2 个)，“(age: number): number”，出现以下错误。
//   类型“boolean”的参数不能赋给类型“number”的参数。
// 箭头函数
// this指向问题： 箭头函数里面的 this 指向上下文
