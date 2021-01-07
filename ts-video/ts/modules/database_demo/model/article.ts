
import { MysqlDb } from './../modules/db'

class ArticleClass{
    title: string | undefined;
    desc: string | undefined;
    country: string | undefined
}

let ArticleModel = new MysqlDb<ArticleClass>();

export{ ArticleClass,ArticleModel }