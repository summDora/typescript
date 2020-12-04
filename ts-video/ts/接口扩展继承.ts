// 接口扩展：接口可以继承接口

interface Animal_interface {
    eat(): void
}

interface Person_interface extends Animal_abstract {
    work(): void;
}

class Person_class_1 implements Person_interface {
    // 错误写法
    // 类型 Person_class_1 缺少类型 Person_interface 中的work, eat
    name: string;
    constructor(name: string) {
        this.name = name
    }
}
class Person_class_2 implements Person_interface {
    // 正确写法
    name: string;
    constructor(name: string) {
        this.name = name
    }
    eat(): void {
        console.log(`${this.name} 在吃东西`)
    }
    work(): void {
        console.log(`${this.name} 在工作`)
    }
}

let child = new Person_class_2('任嘉伦')
child.eat()
child.work()

// 混合运用  继承了父类的 care  和  person接口的  eat work
class Person_class_father {
    name: string;
    constructor(name: string) {
        this.name = name
    }
    care(): void {
        console.log(`${this.name} 在照顾宝宝`)
    }
}
class Person_class_3 extends Person_class_father implements Person_interface {
    constructor(name: string) {
        super(name)
    }
    eat(): void {
        console.log(`${this.name} 在吃东西`)
    }
    work(): void {
        console.log(`${this.name} 在工作`)
    }
}
let fater = new Person_class_3('任嘉伦')
fater.eat()
fater.work()
fater.care()
/*
    任嘉伦 在吃东西
    任嘉伦 在工作
    任嘉伦 在照顾宝宝
*/