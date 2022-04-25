const { imageEncode } = require('../../utils/imageEncode')

export class ImageDao {
    
    static async getImage(imageUrl: string): Promise<string>{
        const response = await fetch(imageUrl);
        const blob = await response.blob();
        return imageEncode(blob)
    }
}