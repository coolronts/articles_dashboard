import { imageEncode } from '../../utils/imageEncode'
import networkClient from '../../configs/axiosConfig';

class ArticleDao {
    async getArticles() {
        const response = await networkClient.get('/aller-structure-task/test_data.json');
        return response
    }

    async getArticleImage(imageUrl) {
        const response = await fetch(imageUrl);
        const blob = await response.blob();
        return imageEncode(blob)
    }

    async updateTitleByArticleId(changedTitle) {
        console.log(changedTitle)

        return "Saved"
    }
}
export default new ArticleDao();