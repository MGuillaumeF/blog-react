import * as React from 'react';
import './PostForm.css';
import { IPost, EMPTY_POST } from '../post-utils';

export interface IPostFormProps {
}

export default function PostForm (props: IPostFormProps) {
    let postExample : IPost = {
        title: '',
        content: '',
        author: 'Hugo'
    }
    let [post, setPost] = React.useState(postExample);

    const onChange = (value : string, key : string) => {
        let postUpdated : any = {...post};
        postUpdated[key] = value;
        setPost(postUpdated);
    };
    const postArticle = (event : any) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/`,
          { 
            method: 'POST',
            mode: 'cors',
            body : JSON.stringify(post)
          }
        ).then(response => {
          if (response.status === 201) {
              return response.json();
          }
        }).then((post) => {
          console.log(post);
        }).catch(() => {
          console.error('Error');
        });
        setPost(EMPTY_POST);
    };
  return (
    <div className="post-form form-group">
        <h1>Add an Article</h1>
        <label>Title</label>
        <input className="form-control" type="text" value={post.title} onChange={(event) => onChange(event.target.value, 'title')} />
        <label>Content</label>
        <textarea className="form-control" rows={4} value={post.content} onChange={(event) => onChange(event.target.value, 'content')} />
        <label>Author</label>
        <select className="form-control" value= {post.author} onChange={(event) => onChange(event.target.value, 'author')}>
            <option value="Hugo">Hugo</option>
            <option value="Juliette">Juliette</option>
            <option value="John">John</option>
        </select>
        <button className="btn btn-success my-3" onClick={postArticle}>Add an article</button>
    </div>
  );
}
