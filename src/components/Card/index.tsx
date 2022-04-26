import React, {Suspense, useEffect, useRef, useState} from "react";

import {ArticleDao} from '../../dao/articleDao'
import {EditableInput} from "../Input";
import {IArticle} from "../../interfaces";
import { Iframe } from '../Iframe';
import { Image } from '../Image';
import { Spinner } from '../Spinner'
import styles from './Card.module.css';
import { useMutation } from "react-query";

type Props = {
  article?: IArticle,
  isLastColumn?: boolean,
}
export const Card: React.FC<Props> = ({ article, isLastColumn }) => {
  let width = article.width;
  let widthPercent = isLastColumn ? '' : Math.round(width / 12 * 100) + '%';
  var flexGrow = isLastColumn ? '1' : '0';
  const ref = useRef(null);
  const [elementWidth, setElementWidth] = useState<any>()
  const[updatedTitle, setUpdatedTitle] = useState<string>(null);

  useEffect(() => {
    if(ref.current.clientWidth ) setElementWidth(ref!.current!.clientWidth);
  }, [width]);

  const { mutate: updateTitleByArticleName } = useMutation(
    async () => {return await ArticleDao.updateTitleByArticleId(updatedTitle)}
  );

  useEffect(() => {
    if(updatedTitle) updateTitleByArticleName()
  }, [updatedTitle]);

  function HandleSave(newTitle: string) {
    if(updatedTitle === newTitle) return;
    setUpdatedTitle(newTitle);
  }

  return (
    <div ref={ref} className={styles.container} style={{ width: widthPercent, flexGrow: flexGrow }}>
          <EditableInput value={article.title} saveHandler={HandleSave} />
          <div className={styles.imageContainer} >
            <Suspense fallback={<Spinner />}>
              {elementWidth && <Image imageUrl={article.imageUrl} width={elementWidth} height={300} alt={article.title} />}
            </Suspense>
          </div>
        <Iframe url={article.url} title={article.title} />
    </div>
  )
}
