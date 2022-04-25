import {ArticleDao} from './articleDao'
import {IArticleDAO} from '../interfaces'

type TypeDAO= {
    articleDao: IArticleDAO,
}
const DAOs:object = {
    articles: ArticleDao,
}
class DaoFactory {
    updateTitleByArticleId: any;
    getArticleImage: any;
    getArticles: any;
    constructor(type: string) {
        const Dao = DAOs[type as keyof typeof DAOs];
        if (Dao) {
            return Dao;
        } else {
            throw new Error('Incorrect DAO type provided');
        };
    }
}
export default DaoFactory;