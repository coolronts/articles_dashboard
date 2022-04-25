import {Flexrow} from '../../components/FlexRow'
import { IArticle } from '../../interfaces';
import React from 'react'
import {Spinner} from '../../components/Spinner'
import { useQuery } from "react-query";

const styles = require( "./Article.module.css")


const DaoFactory = require('../../dao');
const articleDao = new DaoFactory('articles');

export const Article: React.FC = () => {
    const { isLoading, isFetching, error, data } = useQuery('getAllArticles', () => articleDao.getArticles(),{
    cacheTime: 50000,
  });
    if (isLoading) return <Spinner />;
    let articlesData = data.data[0];
    return (
        <React.Fragment>
            <div className={styles.container}>
                <div className={styles.titleContainer}></div>
                <h1 className="title"> Article Editor </h1>
                <h3 className="sub_title">Click the title to edit</h3>
                {isLoading && isFetching ? <Spinner/>: articlesData.map((articlesRow:[IArticle], index: number) => <Flexrow key={index} row={articlesRow} />)}
                {/* {error && <p>Error: {error.message}</p>} */}
            </div>
        </React.Fragment>
    )
}