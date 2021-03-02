// ts中的类

// function Person(name) {
//     this.name = name
//     this.run = function () {
//         console.log('es5中的类')
//     }
// }

class Person{
    name: string; //属性 前面省略了public关键词
    constructor(name: string) {
        this.name = name;
    }
    // 构造函数 实例化类的时候 触发的方法
    // 接收 实例化参数
    // run() :string{
    //     return `${this.name}在运动`
    // }
    run(): string{
        return `${this.name} 运动ing ~`
    }
    getName(): string{
        return this.name
    }
    setName(name:string): void{
        this.name = name
    }
    work(): string{
        return `${this.name} 在工作 ! ---father`
    }
}
// var p = new Person('任嘉伦')
// p.run()
// console.log(p.getName()) //任嘉伦
// p.setName('嘉人')
// console.log(p.getName()) //嘉人


// ts中 实现继承 extends  super

// class Star{
//     name: string;
//     constructor(name: string) {
//         this.name=name
//     }
//     run(): string{
//         return `${this.name} 运动ing ~`
//     }
// }


// class LitterStar extends Star{
//     constructor(name: string) {
//         super(name)
//     }
// }
// let ls = new LitterStar('rjl')
// console.log(ls)
// console.log(ls.run())

class Webs extends Person{
    constructor(value: string) {
        super(value)
        // 初始化父类的构造函数
    }
}
var a = new Webs('继承任嘉伦')
console.log(a)
console.log(a.run())
console.log(a.getName())
console.log(a.work())
// Webs { name: '继承任嘉伦' }
// 继承任嘉伦 运动ing ~
// 继承任嘉伦
// 继承任嘉伦 在工作 ! ---father


// ts中 继承的探讨 父类的方法 和 子类的方法一致

class Second extends Person{
    constructor(name: string) {
        super(name)
    }
    work(): string{
        return `${this.name} is working ! ---son`
    }
    // 子类继承父类方法 后 扩展自己的方法
}
var se = new Second('任嘉伦')
console.log(se.work()) //任嘉伦 is working ! ---son
// 如果子类 和 父类 方法名一致，会 优先 选择 子类 的方法去执行

