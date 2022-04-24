import React from 'react'
import styles from './Iframe.module.css'

export default function Iframe({url, title}){
  return  <iframe className={styles.container} src={url} title={title} loading="lazy"></iframe>
}
