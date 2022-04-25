import React from 'react'

const styles = require('./Iframe.module.css');
type IIframe = {
  url: string,
  title: string,
}

export const Iframe: React.FC<IIframe> = ({ url, title}) => {
  return  <iframe className={styles.container} src={url} title={title} loading="lazy"></iframe>
}
