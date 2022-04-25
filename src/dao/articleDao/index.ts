import {IArticleDAO} from '../../interfaces';

const  { imageEncode } = require('../../utils/imageEncode')

const {networkClient} = require('../../configs/axiosConfig');

export class ArticleDao implements IArticleDAO {
    async getArticles() {
        const response = await networkClient.get('/aller-structure-task/test_data.json');
        return response
    }

    async getArticleImage(imageUrl: string) {
        const response = await fetch(imageUrl);
        const blob = await response.blob();
        return imageEncode(blob)
    }

    async updateTitleByArticleId(changedTitle: string):Promise<string> {
        console.log(changedTitle)

        return "Saved"
    }
}