
// 变量

let dbUrl = 'xxxxxx'

// 获取数据库里的数据

export function getData(): any[] {

    console.log('获取数据')

    return [
        {
            title: '标题'
        },
        {
            desc: '描述'
        },
    ]
}


// 保存数据

export function save(): void {

    console.log('保存数据成功')

}

// 暴露的第二种方式

function a():void{console.log('暴露的数据a')}
function b():void{console.log('暴露的数据b')}
let c:string='xxxxx'
export { a, b, c }

// 暴露的第三种方式 export default 用法（一个模块只能用一次）

function export_default(): void{ console.log('export default') }

export default export_default