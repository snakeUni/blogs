import * as React from 'react';
import './block.css';

export default function Block({ children, des }) {
  return (
    <section className='blog-block'>
      <section className='blog-demo'>{children}</section>
      <div className='blog-des'>{des}</div>
    </section>
  );
}
