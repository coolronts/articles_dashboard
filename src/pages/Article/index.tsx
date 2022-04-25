import React,{useState} from 'react'
import { UseQueryResult, useQuery } from "react-query";

import {ArticleDao} from '../../dao/articleDao'
import {Flexrow} from '../../components/FlexRow'
import { IRows } from '../../interfaces';
import {Spinner} from '../../components/Spinner'
import styles from "./Article.module.css";

export const Article: React.FC = () => {
    const { isLoading, isFetching, error, data }:UseQueryResult<IRows[], Error> = useQuery<IRows[], Error>('getAllArticles', () => ArticleDao.getArticles(),{
        cacheTime: 50000,
    });

    if (isLoading || isFetching) return <Spinner />

    return (
        <React.Fragment>
            <div className={styles.container}>
                <div className={styles.titleContainer}></div>
                <h1 className="title"> Article Editor </h1>
                <h3 className="sub_title">Click the title to edit</h3>
                {data.map((articlesRow: IRows, index: number) => <Flexrow key={index} row={articlesRow} />)}
                {error && <div>{error.message}</div>}
            </div>
        </React.Fragment>
    )
}