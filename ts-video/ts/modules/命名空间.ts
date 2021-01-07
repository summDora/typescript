import { a } from "./db";

/*
    命名空间：

        在代码量较大的情况下，为了避免各种变量命名相冲突，可将相似功能的函数，类，接口等放置到命名空间内

    命名空间和模块的区别：

        命名空间：内部模块，用于组织代码，避免命名重复

        模块：ts的外部模块，侧重代码的复用，一个模块里可能会有多个命名空间
*/
interface Animal {
    name: string;
    eat(): void
}
namespace A {
    export class Dog implements Animal {
        name: string;
        constructor(theName: string) {
            this.name = theName
        }
        eat() {
            console.log(`${this.name} 在吃狗粮`);

        }
    }
}

namespace B {
    export class Dog implements Animal {
        name: string;
        constructor(theName: string) {
            this.name = theName
        }
        eat() {
            console.log(`${this.name} 在啃骨头`);

        }
    }
}

let aDog = new A.Dog('A DOG')
aDog.eat()

let bDog = new B.Dog('B DOG')
bDog.eat()

/*

    A DOG 在吃狗粮
    B DOG 在啃骨头

*/

/*

    命名空间的 暴露 与 引入
    export namespace C{ }
    import { C } from 'xxxxxxx'

*/