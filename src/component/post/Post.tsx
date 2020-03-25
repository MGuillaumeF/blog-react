import * as React from 'react';
import './Post.css'
import { IPost } from './post-utils';


export default function Post (props: IPost) {
  return (
    <article className="post" onClick={props.onclick}>
        <h1>{props.title}</h1>
        <div>
            <div className="author">{props.author}</div>
        </div>
    </article>
  );
}
