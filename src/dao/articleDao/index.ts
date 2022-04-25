import {IRows} from '../../interfaces';
import networkClient from '../../configs/axiosConfig';

export class ArticleDao  {
    
    static getArticles():Promise<IRows[]> {
        return networkClient.get('/aller-structure-task/test_data.json')
            .then(response => {
                return response[0]
            })
    }

    static updateTitleByArticleId(changedTitle: string):string {
        console.log(changedTitle)
        return "Saved"
    }
}



