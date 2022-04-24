import DaoFactory from '../../dao';
import React from 'react'
import Spinner from '../../components/Spinner'
import styles from './Image.module.css'
import { useQuery } from "react-query";

const articleDao = new DaoFactory('articles');
export default function Image({ imageUrl, height = '300px', width = '300px', alt = ''}) {
    const { isLoading, isFetching, error, data } = useQuery('image: '+ alt, () => articleDao.getArticleImage(imageUrl + '&width=' + width));
    return (
    <>
        {isLoading && isFetching ? <Spinner/> : <img loading="lazy" style={{height: height}} className={styles.image} src={data} alt={alt} height={height} width={width} />}
        {error && <p>Error: {error.message}</p>}
    </>
    )
}
