# typescript
语法学习
### 资料
```
https://www.tslang.cn/
https://jkchao.github.io/typescript-book-chinese/
https://ts.xcatliu.com
```
### 配置
```
ts自动编译成js的配置
根目录 tsc --init => Successfully created a tsconfig.json file
修改 tsconfig.json 文件，"outDir": "./js"
编写ts文件
工具栏 => 终端 => 运行任务 => typescript => tsc监视 tsconfig.json
继续编写 保存 终端 会显示编译过程
```
### 常见问题
```
Q: 类装饰器在重载类构造函数时 需要将类所有已存在的构造函数全部写进去么
A: 是的,需要重载所有的属性和方法

命名空间暴露出来的 变量 在使用的时候 需要加上 空间名称


```