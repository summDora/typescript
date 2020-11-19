// 数组合并了相同类型的对象，元组合并了不同类型的对象
// 当直接对元组类型的变量进行初始化或者赋值的时候，需要提供所有元组类型中指定的项
// 定义一对值分别为string和number的元组
var arr1;
arr1 = ['rjl'];
// 不能将类型“[string]”分配给类型“[string, number]”
arr1 = [12];
// 不能将类型“number”分配给类型“string”
arr1 = [1, 'rjl'];
// 不能将类型“number”分配给类型“string”
// 不能将类型“string”分配给类型“number”
arr1 = ['rjl', 1];
// success
arr1 = ['rjl', 1, 2, 3, 4];
// 不能将类型“[string, number, number, number, number]”分配给类型“[string, number]”。
// 源具有 5 个元素，但目标仅允许 2 个
arr1[0] = 'rjl';
// success
arr1[1] = 12;
// success
arr1[2] = 12;
// 不能将类型“12”分配给类型“undefined”
arr1 = ['rjl', 1];
arr1.push('male');
// success
arr1.push(true);
// 类型“boolean”的参数不能赋给类型“string | number”的参数
// 当添加越界的元素时，它的类型会被限制为元组中每个类型的联合类型
