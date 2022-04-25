import {ImageDao} from '../../dao/imageDao'
import React from 'react'
import {Spinner} from '../Spinner'
import  styles from './Image.module.css';
import { useQuery } from "react-query";

type Props = {
    imageUrl: string, width?: number, height?: number, alt?: string,
}

export const Image: React.FC<Props> = ({ imageUrl, width, height, alt}) =>  {
    const { isLoading, isFetching, error, data } = useQuery<string, Error>('image: '+ alt, () => ImageDao.getImage(imageUrl + '&width=' + width + '&height=' + height));
    return (
    <>
        {isLoading && isFetching ? <Spinner/> : <img loading="lazy" style={{height: height}} className={styles.image} src={data} alt={alt} height={height} width={width} />}
        {error && <p>Error: {error.message}</p>}
    </>
    )
}
