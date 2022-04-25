import {Card} from '../Card'
import {IArticle} from '../../interfaces'
import React from 'react'
import styles from './Flexrow.module.css';

type Props = {
    row: any
}
export const Flexrow: React.FC<Props> = ({ row }) =>  {
  let lastColumn = row.columns.length - 1;
  return (
    <div className={styles.flex}>
      {row.columns.map((article:IArticle, index: number) => {
        return <Card key={index} article={article} isLastColumn={lastColumn === index ? true : false} />
      })}
    </div>
  )
}
