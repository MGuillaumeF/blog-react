import * as React from 'react';
import './Blog.css'
import PostModal from '../post/post-modal/PostModal';
import PostForm from '../post/post-form/PostForm';
import { EMPTY_POST_ARRAY, IPost, NO_ID } from '../post/post-utils';
import Post from '../post/Post';

export interface IBlogProps {
}

export default function Blog (props: IBlogProps) {
    let [posts, setPosts] = React.useState(EMPTY_POST_ARRAY);
    let [selectedId, setSelectedId] = React.useState(NO_ID);
    React.useEffect(() => {
        if (posts.length === 0) {
            fetch('https://jsonplaceholder.typicode.com/posts',
                { 
                    method: 'GET',
                    mode: 'cors'
                }
            ).then(response => {
                if (response.status === 200) {
                    return response.json();
                }
            }).then((posts) => {
                console.log(posts);
                const postsAuthor = posts.slice(0,4).map((post : any) => {
                    return {...post, author : 'Hugo'};
                });
                setPosts(postsAuthor);
            }).catch(() => {
                console.error('Error');
            });
        }
    });
    const selectId = (id : any) => {
        setSelectedId(id);
    };
  return (
    <div>
        <section>
        <PostForm />
        </section>
        <h2 className="text-center my-5">Select a post ...</h2>
        <PostModal id={selectedId} />
        <section className="Posts">
            {
                posts.map((post :IPost) => {
                    return (
                    <Post 
                        key={post.id}
                        title={post.title} 
                        author={post.author} 
                        content={post.content}
                        onclick={() => {selectId(post.id)}}
                    />)
                })
            }
        </section>
    </div>
  );
}
