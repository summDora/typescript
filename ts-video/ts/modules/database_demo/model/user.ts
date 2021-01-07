import { MysqlDb as DB } from './../modules/db'

class UserClass{
    username: string | undefined;
    password: string | undefined;
}

let UserModel = new DB<UserClass>();

export { UserClass,UserModel }