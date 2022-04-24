import React, {Suspense, useEffect, useRef, useState} from "react";

import DaoFactory from '../../dao';
import {EditableInput} from "../Input";
import Spinner from '../Spinner'
import styles from './Card.module.css'
import { useMutation } from "react-query";

const Iframe = React.lazy(() => import('../Iframe'));
const Image = React.lazy(() => import('../Image'));
const articleDao = new DaoFactory('articles');

export default function Card({ article, isLastColumn }) {
  let width = article.width;
  let widthPercent = isLastColumn ? '' : Math.round(width / 12 * 100) + '%';
  var flexGrow = isLastColumn ? '1' : '0';
  const ref = useRef(null);
  const [elementWidth, setElementWidth] = useState(0)
  const[updatedTitle, setUpdatedTitle] = useState(null);
  
  useEffect(() => {
    setElementWidth(ref.current.clientWidth);
  }, [width]);

  const { mutate: updateTitleByArticleName } = useMutation(
    async () => {return await articleDao.updateTitleByArticleId(updatedTitle)}
  );

  
  useEffect(() => {
    if(updatedTitle) {
      updateTitleByArticleName();
    }
  }, [updatedTitle]);
  
  function HandleSave(newTitle) { 
    if(updatedTitle === newTitle) return;
    setUpdatedTitle(() => newTitle);
  }

  return (
    <div ref={ref} className={styles.container} style={{ width: widthPercent, flexGrow: flexGrow }}>
          <EditableInput value={article.title} saveHandler={HandleSave} />
          <div className={styles.imageContainer} >
            <Suspense fallback={<Spinner />}>
              {elementWidth && <Image imageUrl={article.imageUrl} width={elementWidth} alt={article.title} />}
            </Suspense>
          </div>
        <Iframe url={article.url} title={article.title} />
    </div>
  )
}
