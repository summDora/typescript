// 枚举类型
// 用于取值被限定在一定范围内的场景
// 枚举成员会被赋值为从 0 开始递增的数字，同时也会对枚举值到枚举名进行反向映射
enum Days { Sun, Mon, Tue, Wed, Thu, Fri, Sat };
console.log(Days["Sun"] === 0); // true
console.log(Days["Mon"] === 1); // true
console.log(Days["Tue"] === 2); // true
console.log(Days["Sat"] === 6); // true

console.log(Days[0] === "Sun"); // true
console.log(Days[1] === "Mon"); // true
console.log(Days[2] === "Tue"); // true
console.log(Days[6] === "Sat"); // true

// 手动赋值
// 未手动赋值的枚举项会接着上一个枚举项递增
// 如果未手动赋值的枚举项与手动赋值的重复了，TypeScript 是不会察觉
enum Days2 { Sun = 3, Mon = 1, Tue, Wed, Thu, Fri, Sat };
console.log(Days2["Sun"] === 3); // true
console.log(Days2["Wed"] === 3); // true
console.log(Days2[3] === "Sun"); // false
console.log(Days2[3] === "Wed"); // true

// 手动赋值的枚举项也可以为小数或负数，此时后续未手动赋值的项的递增步长仍为 1
enum Floor { First = -2, Second, Third = 1.6, Four, Five = 3.1, six }
console.log(Floor)
/* {
  First: -2,
  '-2': 'First',
  Second: -1,
  '-1': 'Second',
  Third: 1.6,
  '1.6': 'Third',
  Four: 2.6,
  '2.6': 'Four',
  Five: 3.1,
  '3.1': 'Five',
  six: 4.1,
  '4.1': 'six'
} */


// 枚举项 有两种类型
// 常数项

// 计算所得项
// 如果紧接在计算所得项后面的是未手动赋值的项，那么它就会因为无法获得初始值而报错