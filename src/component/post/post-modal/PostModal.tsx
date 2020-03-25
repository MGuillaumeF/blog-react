import * as React from 'react';
import './PostModal.css'
import { EMPTY_POST } from '../post-utils';

export interface IPostModalProps {
  id : any
}

export default function PostModal (props: IPostModalProps) {
  let [loadedPost, setLoadedPost] = React.useState(EMPTY_POST)
  React.useEffect(() => {
    if (props.id !== null) {
      if (!loadedPost.id) {
        fetch(`https://jsonplaceholder.typicode.com/posts/${props.id}`,
          { 
            method: 'GET',
            mode: 'cors'
          }
        ).then(response => {
          if (response.status === 200) {
              return response.json();
          }
        }).then((post) => {
          console.log(post);
          setLoadedPost(post);
        }).catch(() => {
          console.error('Error');
        });
      }
      }
      
  }); 
  return (
    props.id !== null ? (
    <div className="post-full">
        <h1>{loadedPost.title}</h1>
        <p>{loadedPost.content}</p>

        <button className="btn btn-danger my-3 btn-post">Close</button>
    
    </div>) : null
  );
}
