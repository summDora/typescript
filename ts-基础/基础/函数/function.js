// 在 JavaScript 中，有两种常见的定义函数的方式
// 函数声明（Function Declaration）
// 函数表达式（Function Expression）
// 函数  有 输入 输出 均需考虑到
// 输入多余的（或者少于要求的）参数，是不被允许的
// 其声明类型不为 "void" 或 "any" 的函数必须返回值 (大括号前的类型申明 为返回值类型申明)
// 函数声明（Function Declaration）
function sum(x, y) {
    console.log(x + y);
    return x + y;
}
sum(1, 2, 3);
// 应有 2 个参数，但获得 3 个
// 3 js中 忽略第三个参数
sum(1);
// 应有 2 个参数，但获得 1 个
// 未提供 "y" 的自变量
// NaN
// 函数表达式（Function Expression）
var mySumWarning = function (x, y) {
    return x + y;
};
// 这是可以通过编译的，不过事实上，上面的代码只对等号右侧的匿名函数进行了类型定义，
// 而等号左边的 mySum，是通过赋值操作进行类型推论而推断出来的
// 函数表达式 1
var mySuccess = function (x, y) {
    return x + y;
};
// 函数表达式 2
var getSum;
getSum = function (x, y) {
    console.log(x + y);
    return x + y;
};
getSum(10, 20);
var muSumFunc;
muSumFunc = function (x, y, z) {
    var sum = x + y + z;
    console.log(sum);
    return sum;
};
muSumFunc(10, 20, 30);
// 60
// 采用函数表达式|接口定义函数的方式时
// 对等号左侧进行类型限制，可以保证以后对函数名赋值时保证参数个数、参数类型、返回值类型不变
// 可选参数
// 需要注意的是，可选参数必须接在必需参数后面
// 换句话说，可选参数后面不允许再出现必需参数了
function name(firstName, lastName) {
    var str = "hello ! ";
    if (lastName) {
        str += firstName + " " + lastName;
    }
    else {
        str += firstName + " baby";
    }
    console.log(str);
    return str;
}
name('jolin', 'cai');
name('Jiaren');
// hello ! jolin cai
// hello ! Jiaren baby
// 参数默认值
function defaultName(firstname, lastname, nickname) {
    if (lastname === void 0) { lastname = 'REN'; }
    var str = "hello," + lastname + "   " + firstname + ",nickname:" + nickname;
    console.log(str);
    return str;
}
defaultName('嘉伦');
// hello,REN   嘉伦,nickname:undefined
defaultName('嘉伦', '国超');
// hello,国超   嘉伦,nickname:undefined
defaultName('嘉伦', '任', '国超');
// hello,任   嘉伦,nickname:国超
defaultName('嘉伦', undefined, '国超');
// hello,REN   嘉伦,nickname:国超
// TS 会将添加了默认值的参数识别为可选参数
// 此时不受「可选参数必须接在必需参数后面」的限制
// 剩余参数
// ES6 中，可以使用 ...rest 的方式获取函数中的剩余参数
function push(array) {
    var items = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        items[_i - 1] = arguments[_i];
    }
    items.forEach(function (item) {
        array.push(item);
    });
    console.log(array);
}
var a = ['hello', 'ren', 'jia'];
push(a, 1, 2, 3, 4, 5, 6, 7, 8, 9);
/*
        ['hello', 'ren', 'jia',
            1,       2,     3,
            4,       5,     6,
            7,       8,     9]
*/
// 注意，rest 参数只能是最后一个参数
// 重载
// 允许一个函数接受不同数量或类型的参数时，作出不同的处理
// eg: 我们需要实现一个函数 reverseFunc ，输入数字 123 的时候，输出反转的数字 321，输入字符串 'hello' 的时候，输出反转的字符串 'olleh'
// 1. 联合类型
// 缺点，不能够精确的表达，输入为数字的时候，输出也应该为数字，输入为字符串的时候，输出也应该为字符串
function reverseFunc(x) {
    var returnStr;
    if (typeof x === 'number') {
        returnStr = Number(x.toString().split('').reverse().join(''));
    }
    else if (typeof x === 'string') {
        returnStr = x.split('').reverse().join('');
    }
    console.log(returnStr);
    return returnStr;
}
reverseFunc(123456);
reverseFunc('summerDora');
function reloadFunc(x) {
    var returnStr;
    if (typeof x === 'number') {
        returnStr = Number(x.toString().split('').reverse().join(''));
        // 去掉 Number() typeof returnStr === 'string'
    }
    else if (typeof x === 'string') {
        returnStr = x.split('').reverse().join('');
    }
    console.log('-----------');
    console.log(returnStr);
    console.log(typeof returnStr);
    return returnStr;
}
reloadFunc(4567890);
reloadFunc('renjialun');
/*

    -----------
    987654
    number
    -----------
    nulaijner
    string

*/