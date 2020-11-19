// 使用 class 定义类，使用 constructor 定义构造函数
// 通过 new 生成新实例的时候，会自动调用构造函数
// 不允许存在多个构造函数实现
class Animal {
    // public name;
    public type;
    constructor(name) {
        this.name = name;
        this.type = 'cat'
    };
    sayHi() {
        return `my name is ${this.name}`;
    }
    get name() {
        return 'Jack';
    }
    set name(value) {
        console.log('setter: ' + value);
    }
    static judAnimal(item) {
        return item instanceof Animal
    }
}
let a = new Animal('aaa')
console.log(a)
console.log(a.sayHi());
// Animal { name: 'aaa', type: 'cat' }
// my name is aaa

// 继承 =>
// 使用 extends 关键字实现继承 =>
// 子类中使用 super 关键字来调用 父类的构造函数和方法
class Fish extends Animal {
    constructor(name) {
        super(name)
        console.log(this.name);
        // FISH
        console.log(this);
        // Fish { name: 'FISH', type: 'cat' }
    };
    sayHi() {
        return `hello i am extends animal - ${this.name}`
    }
}

let b = new Fish('FISH')
console.log(b)
console.log(b.sayHi());
// Fish { name: 'FISH', type: 'cat' }
// hello i am extends animal - FISH


// 存取器
let c = new Animal('ccc');
c.name = 'cname'
console.log(c.name);

// 静态方法 static
// 不需要实例化，而是直接通过类来调用
let d = new Animal('ddd');
Animal.judAnimal(d);
d.judAnimal(d);
// 属性 "judAnimal" 不是类型为 "Animal" 的静态成员
// Property 'judAnimal' is a static member of type 'Animal'

// 三种访问修饰符（Access Modifiers），分别是 public、private 和 protected
// public 修饰的属性或方法是公有的，可以在任何地方被访问到（默认）
// private 修饰的属性或方法是私有的，不能在声明它的类的外部访问，不允许子类访问
// protected 修饰的属性或方法是受保护的，区别是它在子类中也是允许被访问的

class TypeAnimal {
    public name;
    private nickname;
    protected sex;
    public constructor(name,nickname,sex){
        this.name = name
        this.nickname = nickname
        this.sex = sex
    }
}
class A_Animal extends TypeAnimal {
    constructor(name, nickname, sex) {
        super();
        console.log(this.name, 'A_Animal');
        console.log(this.nickname, 'A_Animal');
        // 属性“nickname”为私有属性，只能在类“TypeAnimal”中访问
        console.log(this.sex, 'A_Animal');
    }
}
// 当构造函数修饰为 private 时，该类不允许被继承或者实例化
// 使用 private 修饰的属性或方法，在子类中也是不允许访问的

// 当构造函数修饰为 protected 时，该类只允许被继承
// 使用 protected 修饰的属性或方法，则允许在子类中访问