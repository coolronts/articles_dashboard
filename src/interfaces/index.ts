export interface IArticle{
    type: "Article",
    width: number,
    url: string,
    title: string;
    imageUrl: string;
}

export interface IArticleDAO {
    getArticles(): Promise<IArticle[]>;
    getArticleImage(imageUrl: string): Promise<string>;
    updateTitleByArticleId(changedTitle: string): Promise<string>;
}