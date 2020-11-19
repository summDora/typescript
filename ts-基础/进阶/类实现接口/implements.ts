// 一般来讲，一个类只能继承自另一个类，有时候不同类之间可以有一些共有的特性
// 这时候就可以把特性提取成接口（interfaces）
// 用implements 关键字来实现。这个特性大大提高了面向对象的灵活性

// eg:  门是一个类，防盗门是门的子类。如果防盗门有一个报警器的功能，我们可以简单的给防盗门添加一个报警方法。这时候如果有另一个类，车，也有报警器的功能，就可以考虑把报警器提取出来，作为一个接口，防盗门和车都去实现它

interface Alarm {
    alert():void
}

interface Light {
    lightOn(): void;
    lightOff(): void;
}

class Door {
}

class SecurityDoor extends Door implements Alarm {
    alert() {
        console.log('SecurityDoor alert');
    }
}
// 一个类可以实现多个接口
class Car implements Alarm, Light {
    alert() {
        console.log('Car alert');
    }
    lightOn() {
        console.log('Car light on');
    }
    lightOff() {
        console.log('Car light off');
    }
}
// 接口与接口之间可以是继承关系
interface LightableAlarm extends Alarm {
    lightOn(): void;
    lightOff(): void;
}
// 常见的面向对象语言中，接口是不能继承类的，但是在 TypeScript 中却是可以的
class Point {
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

interface Point3d extends Point {
    z: number;
}

let point3d: Point3d = {x: 1, y: 2, z: 3};