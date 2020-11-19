"use strict";
// 把声明语句 放到一个 单独的文件中，这就是声明文件
// 声明文件 必须以 .d.ts 为后缀
// 所以当我们将 jQuery.d.ts 放到项目中时，其他所有 *.ts 文件就都可以获得 jQuery 的类型定义了
// 假如仍然无法解析，那么可以检查下 tsconfig.json 中的 files、include 和 exclude 配置，确保其包含了 jQuery.d.ts 文件
jQuery = function (selector) {
    return document.querySelector(selector);
};
jQuery('#foo');
jQuery('#foo');
var cat = new Animal('Tom');
console.log(cat);
var directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
