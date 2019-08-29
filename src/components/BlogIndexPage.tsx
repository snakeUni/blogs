import { Route } from 'navi';
import React from 'react';
import { NavLink } from 'react-navi';
import siteMetadata from '../siteMetadata';
import ArticleSummary from './ArticleSummary';
import Bio from './Bio';
// import Toggle from './toggle';
import Pagination from './Pagination';
import styles from './BlogIndexPage.module.css';

interface BlogIndexPageProps {
  blogPathname: string;
  pageCount: number;
  pageNumber: number;
  postRoutes: Route[];
}

function BlogIndexPage({
  blogPathname,
  pageCount,
  pageNumber,
  postRoutes
}: BlogIndexPageProps) {
  return (
    <div>
      <header>
        <h1 className={styles.title}>
          <NavLink href={blogPathname}>{siteMetadata.title}</NavLink>
          {/* <Toggle /> */}
        </h1>
        <Bio />
      </header>
      <ul className={styles.articlesList}>
        {postRoutes.map(route => (
          <li key={route.url.href}>
            <ArticleSummary blogPathname={blogPathname} route={route} />
          </li>
        ))}
      </ul>
      {pageCount > 1 && (
        <Pagination
          blogPathname={blogPathname}
          pageCount={pageCount}
          pageNumber={pageNumber}
        />
      )}
      <footer className={styles.footer}>
        <div>
          <a href="./rss.xml" target="_blank" style={{ float: 'right' }}>
            RSS
          </a>
          <a href="https://twitter.com/lanyincao">twitter</a> &bull;{' '}
          <a href="https://github.com/snakeUni/uni-blog">github</a> &bull;{' '}
          <NavLink href="./about">About Me</NavLink> &bull;{' '}
          <NavLink href="./tags">Tags</NavLink>
        </div>
      </footer>
    </div>
  );
}

export default BlogIndexPage;
