
let list = [
    { id: 1, name: 'name_one', age: 18 },
    { id: 2, name: 'name_two', age: 19 },
    { id: 3, name: 'name_three', age: 20 },
    { id: 4, name: 'name_four', age: 21 },
    { id: 5, name: 'name_five', age: 22 },
    { id: 6, name: 'name_six', age: 23 }
]

interface DBI<T> {

    add(info: T): boolean;

    update(info: T, id: number): boolean;

    delete(id: number): boolean;

    get(id: number): any[]
}

export class MysqlDb<T> implements DBI<T>{
    connect(): boolean{
        console.log('连接mysql数据库成功')
        return true
    }
    add(info: T): boolean {
        console.log(info);
        return true
    }
    update(info: T, id: number): boolean {
        throw new Error("Method not implemented.");
    }
    delete(id: number): boolean {
        throw new Error("Method not implemented.");
    }
    get(id: number): any[] {
        let result: any[] = []
        list.map(item => {
            if (id == item.id) {
                result.push(item)
            }
        })
        return result
    }
}