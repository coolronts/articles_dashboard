import DaoFactory from '../../dao';
import React from 'react'
import {Spinner} from '../Spinner'
import { useQuery } from "react-query";

const styles = require('./Image.module.css');
const articleDao = new DaoFactory('articles');
type Props = {
    imageUrl: string, width?: number, height?: number, alt?: string,
}

export const Image: React.FC<Props> = ({ imageUrl, width, height, alt}) =>  {
    const { isLoading, isFetching, error, data } = useQuery('image: '+ alt, () => articleDao.getArticleImage(imageUrl + '&width=' + width));
    return (
    <>
        {isLoading && isFetching ? <Spinner/> : <img loading="lazy" style={{height: height}} className={styles.image} src={data} alt={alt} height={height} width={width} />}
        {/* {error && <p>Error: {error.message}</p>} */}
    </>
    )
}
