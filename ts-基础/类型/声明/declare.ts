// 把声明语句 放到一个 单独的文件中，这就是声明文件
// 声明文件 必须以 .d.ts 为后缀
// 所以当我们将 jQuery.d.ts 放到项目中时，其他所有 *.ts 文件就都可以获得 jQuery 的类型定义了
// 假如仍然无法解析，那么可以检查下 tsconfig.json 中的 files、include 和 exclude 配置，确保其包含了 jQuery.d.ts 文件

// 声明全局变量
// 声明语句中只能定义类型，切勿在声明语句中定义具体的实现
declare var jQuery: (select: string) => any;
declare let jQ: (select: string) => any;
declare const jquery: (select: string) => any;
jQuery = function (selector) {
    return document.querySelector(selector)
}
jQuery('#foo');

// 声明全局函数
declare function jQuery(selector: string): any;
jQuery('#foo')
declare function jQuery(selector: string): any;
declare function jQuery(domReadyCallback: () => any): any;

// 声明类
// 当全局变量是一个类的时候，我们用 declare class 来定义它的类型
// 同样的，declare class 语句也只能用来定义类型
// 不能用来定义具体的实现，比如定义 sayHi 方法的具体实现则会报错
declare class Animal {
    name: string;
    constructor(name: string) {

    };
    sayHi(): string;
    /* sayHi() {
        return `My name is ${this.name}`;
    }; */
}
let cat = new Animal('Tom')
console.log(cat)

// 外部枚举
// 使用 declare enum 定义的枚举类型也称作外部枚举（Ambient Enums）
// 与其他全局变量的类型声明一致，declare enum 仅用来定义类型，而不是具体的值
declare enum Directions {
    Up,
    Down,
    Left,
    Right
}
let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right]