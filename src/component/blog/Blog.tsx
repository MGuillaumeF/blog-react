import * as React from 'react';
import './Blog.css'
import PostModal from '../post/post-modal/PostModal';
import PostForm from '../post/post-form/PostForm';

export interface IBlogProps {
}

export default function Blog (props: IBlogProps) {
  return (
    <div>
        <section>
        <PostForm />
        </section>
        <h2 className="text-center my-5">Select a post ...</h2>
        <PostModal />
        <section className="Posts">
        </section>
    </div>
  );
}
