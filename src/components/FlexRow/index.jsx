import Card from '../Card'
import React from 'react'
import styles from './Flexrow.module.css'

export default function FlexRow({ row }) {
  let lastColumn = row.columns.length - 1;
  return (
    <div className={styles.flex}>
      {row.columns.map((article, index) => {
        return <Card key={index} article={article} isLastColumn={lastColumn === index ? true : false} />
      })}
    </div>
  )
}
