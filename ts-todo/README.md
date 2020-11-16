# ts-todo

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### vscode prettier
```
在prettier issue中发现了原因所在，prettier3.7以上会优先读取项目根目录下的editorconfig or prettier config，如果有，就不会使用vscode setting中的设置，所以最好每个项目都配置一个单独的 prettier 配置 文件

```
### window下git bash 创建项目
```
winpty vue.cmd create project-name
