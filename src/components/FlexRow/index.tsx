import {IArticle, IRows} from '../../interfaces'
import React, { cloneElement } from 'react'

import styles from './Flexrow.module.css';

type Props = {
  row: IRows,
  children: any
}
export const Flexrow: React.FC<Props> = ({ row, children }) => {
  let lastColumn = row.columns.length - 1;
  return (
    <div className={styles.flex}>
      {row.columns.map((article:IArticle, index: number) => {
        return  cloneElement(children, {article, isLastColumn: index === lastColumn})
      })}
    </div>
  )
}
