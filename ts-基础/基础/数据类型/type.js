/*
JavaScript 的类型分为两种：原始数据类型（Primitive data types）和对象类型（Object types）
原始数据类型包括：布尔值、数值、字符串、null、undefined 以及 ES6 中的新类型 Symbol 和 BigInt。
*/
var istrue = false;
var createdByNewBoolean = new Boolean(1);
// 使用构造函数 Boolean 创造的对象不是布尔值
// Type 'Boolean' is not assignable to type 'boolean'.
// 'boolean' is a primitive, but 'Boolean' is a wrapper object. Prefer using 'boolean' when possible.
var number1 = 1;
// 十六进制
var number2 = 0xf00d;
// 二进制 会被编译为十进制数字
var number3 = 10;
// 八进制 会被编译为十进制数字
var number4 = 484;
var number5 = NaN;
var number6 = Infinity;
var myName = 'Tom';
var myAge = 25;
// 模板字符串
var sentence = "Hello, my name is " + myName + ".\nI'll be " + (myAge + 1) + " years old next month.";
// JavaScript 没有空值（Void）的概念
var unusable = undefined;
// 声明一个 void 类型的变量没有什么用，因为你只能将它赋值为 undefined 和 null：
function alertName() {
    alert('My name is Tom');
}
// 在 TypeScript 中，可以用 void 表示没有任何返回值的函数
// TypeScript 中，可以使用 null 和 undefined 来定义这两个原始数据类型：
// 与 void 的区别是，undefined 和 null 是所有类型的子类型
// 也就是说 undefined 类型的变量，可以赋值给 number 类型的变量
var undefined1 = undefined;
var null1 = null;
// 这样不会报错
var number7 = undefined;
var undefined2;
var number8 = undefined2;
// 而 void 类型的变量不能赋值给 number 类型的变量：
var void1;
var number9 = void1;
// 报错
// 任意类型
// 如果是一个普通类型，在赋值过程中改变类型是不被允许的
// 如果是 any 类型，则允许被赋值为任意类型
var any1 = 'seven';
any1 = 7;
// 任意值上访问任何属性都是允许的
console.log(any1.myName);
console.log(any1.myName.firstName);
// 声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值
