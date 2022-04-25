export interface IArticle{
    type: "Article",
    width: number,
    url: string,
    title: string;
    imageUrl: string;
}
export interface IRows{
    type: "Row",
    columns: IArticle[];
}
export interface IArticleDAO {
    getArticles(): Promise<IArticle[]>;
    updateTitleByArticleId(changedTitle: string): Promise<string>;
}

export interface IImageDAO{
   getImage(imageUrl: string): Promise<string>;
}