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
var inter_arr1 = [1, 2, 3, 4];
var inter_arr2 = ['1', '2', '3', '4'];
// 不能将类型 “string” 分配给类型 “number”
console.log(inter_arr1);
console.log(inter_arr2);
// [ 1, 2, 3, 4 ]
// [ '1', '2', '3', '4' ]
