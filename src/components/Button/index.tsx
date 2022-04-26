import React from 'react'
import styles from './Button.module.css'

type Props = {
    name: string
    handler: (e) => void
}


export function Button({name, handler}: Props) {
  return (
    <button className={styles.Button} onClick={(e)=>handler(e)}>{name}</button>
  )
}