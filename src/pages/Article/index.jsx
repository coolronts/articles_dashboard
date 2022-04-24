import DaoFactory from '../../dao';
import FlexRow from '../../components/FlexRow'
import React from 'react'
import Spinner from '../../components/Spinner'
import styles from "./Article.module.css"
import { useQuery } from "react-query";

const articleDao = new DaoFactory('articles');

export default function Article(){
    const { isLoading, isFetching, error, data } = useQuery('getAllArticles', () => articleDao.getArticles(),{
    cacheTime: 50000,
  });
    if (isLoading) return <Spinner />;
    let articlesData = data.data[0];
    return (
        <React.Fragment>
            <div className={styles.container}>
                <h1 className="title">Editor </h1>
                {isLoading && isFetching ? <Spinner/>: articlesData.map((articlesRow, index) => <FlexRow key={index} row={articlesRow} />)}
                {error && <p>Error: {error.message}</p>}
            </div>
        </React.Fragment>
    )
}