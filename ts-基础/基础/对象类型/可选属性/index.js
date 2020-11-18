// age 属性 可存在可不存在
var A = {
    name: 'A',
    age: 12
};
// success
var B = {
    name: 'B'
};
// success
var C = {
    name: 'C',
    age: 'cccccc'
};
// 所需类型来自属性 "age"，在此处的 "Person" 类型上声明该属性
// 不能将类型“string”分配给类型“number”
var D = {
    name: 'B',
    sex: 'male'
};
// 对象文字可以只指定已知属性，并且“sex”不在类型“Person”中
// 仍然不允许添加未定义的属性
console.log(A, B, C, D);
// { name: 'A', age: 12 }
// { name: 'B' }
// { name: 'C', age: 'cccccc' }
// { name: 'B', sex: 'male' }
