"use strict";
var A = {
    name: 'A'
};
// 定义的变量比接口少了一些属性是不允许的
// 类型 "{ name: string; }" 中缺少属性 "age"，但类型 "Person" 中需要该属性
var B = {
    name: 'B',
    age: 20,
    sex: 'male'
};
// 多一些属性也是不允许的
// 对象文字可以只指定已知属性，并且“sex”不在类型“Person”中
// 可见，赋值的时候，变量的形状必须和接口的形状保持一致 (完全一致)
console.log(A);
console.log(B);
// { name: 'A' }
// { name: 'B', age: 20, sex: 'male' }
