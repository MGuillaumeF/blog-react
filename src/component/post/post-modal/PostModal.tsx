import * as React from 'react';
import './PostModal.css'

export interface IPostModalProps {
  id : any
}

export default function PostModal (props: IPostModalProps) {
  return (
    props.id !== null ? (
    <div className="post-full">
        <h1>Title</h1>
        <p>Content</p>

        <button className="btn btn-danger my-3 btn-post">Close</button>
    
    </div>) : null
  );
}
