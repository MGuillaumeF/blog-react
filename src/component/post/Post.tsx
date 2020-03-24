import * as React from 'react';
import './Post.css'

export interface IPostProps {
}

export default function Post (props: IPostProps) {
  return (
    <article className="post">
        <h1>Title</h1>
        <div>
            <div className="author">Author</div>
        </div>
    </article>
  );
}
