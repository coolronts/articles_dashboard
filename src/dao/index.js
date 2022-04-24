import articleDao from './articleDao'

const DAOs = {
    articles: articleDao,
}
class DaoFactory {
    constructor(type) {
        const Dao = DAOs[type];
        if (Dao) {
            return Dao;
        } else {
            throw new Error('Incorrect DAO type provided');
        }
    }
}
export default DaoFactory;