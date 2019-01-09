import { join } from 'path'
import React from 'react'
import { NavLink } from 'react-navi'
import { formatDate } from '../utils/formats'
import styles from './ArticleMeta.module.css'

interface ArticleMetaProps {
  blogPathname: string
  meta: any
  readingTime?: any
}

function ArticleMeta({ blogPathname, meta, readingTime }: ArticleMetaProps) {
  let readingTimeElement
  if (readingTime) {
    let minutes = Math.max(Math.round(readingTime.minutes), 1)
    let cups = Math.round(minutes / 5)
    readingTimeElement = (
      <React.Fragment>
        {' '}
        &bull;{' '}
        <span className={styles.readingTime}>
          {new Array(cups || 1).fill('☕️').join('')} {minutes} min read
        </span>
      </React.Fragment>
    )
  }

  return (
    <small className={styles.ArticleMeta}>
      <time dateTime={meta.date.toUTCString()}>{formatDate(meta.date)}</time>
      {meta.tags && meta.tags.length && (
        <>
          {' '}
          &bull;{' '}
          <ul className={styles.tags}>
            {meta.tags.map(tag => (
              <li key={tag}>
                <NavLink href={join(blogPathname, 'tags', tag)}>{tag}</NavLink>
              </li>
            ))}
          </ul>
        </>
      )}
      {readingTimeElement || null}
    </small>
  )
}

export default ArticleMeta
