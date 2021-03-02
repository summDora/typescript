//
console.log('类的静态属性和方法')
// 多态：父类定义一个方法不去实现，让继承它的子类去实现，每一个子类有不同的表现
// 多态属于继承
class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    eat() {
        console.log('吃的方法：')
        // 具体吃什么？ 继承他的子类去实现 每一个子类的表现不一样
    }
}
class Dog extends Animal {
    constructor(name: string) {
        super(name)
    }
    eat() {
        return this.name+'吃粮食'
    }
}
class Cat extends Animal {
    constructor(name: string) {
        super(name)
    }
    eat() {
        return this.name+'吃小鱼'
    }
}
let dog = new Dog('Haba')
console.log(dog.eat())
let cat = new Cat('Tom')
console.log(cat.eat())
/*
    Haba吃粮食
    Tom吃小鱼
*/