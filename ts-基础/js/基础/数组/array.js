"use strict";
// 最简单的方法是使用「类型 + 方括号」来表示数组
var num_arr = [];
num_arr = [1, 2, 3, 4, 5];
num_arr = ['1111', '2222', '33333'];
console.log(num_arr);
// [ '1111', '2222', '33333' ]
// 不能将类型 “string” 分配给类型 “number”
// 数组的项中不允许出现其他的类型
num_arr.push('6');
console.log(num_arr);
// [ '1111', '2222', '33333', '6' ]
// 类型 “string” 的参数不能赋给类型 “number” 的参数
// 数组的一些方法的参数也会根据数组在定义时约定的类型进行限制
// num_arr中只能传入 number 类型的参数
// 数组泛型（ 泛型 ）
var array = [1, 1, 2, 3, 5];
var inter_arr1 = [1, 2, 3, 4];
var inter_arr2 = ['1', '2', '3', '4'];
// 不能将类型 “string” 分配给类型 “number”
console.log(inter_arr1);
console.log(inter_arr2);
// [ 1, 2, 3, 4 ]
// [ '1', '2', '3', '4' ]
// 类数组 （ 内置对象 ）
var a = '需要深八一八';
// any 在数组中的应用
// 一个比较常见的做法是，用 any 表示数组中允许出现任意类型
var list = ['xcatliu', 25, { website: 'http://xcatliu.com' }];
