import React, { useEffect, useState } from 'react'
import PostComponent from '../PostComponent'
import PostListComponent from '../PostListComponent'
import axios from 'axios';
import styles from './PostExposeComponent.module.scss';

export default function PostExposeComponent() {
    const [posts, setPosts] = useState([]);

    const getPosts = () => {
        axios.get('https://dummyjson.com/posts').then(res => {
            setPosts(res.data.posts);
        })
    };

    const newPost = (data) => {
        axios.post('https://dummyjson.com/posts/add', data).then(({ data: resData }) => {
            console.log('res', resData);
            setPosts([resData, ...posts]);
        })
    }

    useEffect(() => {
        getPosts();
    }, [])
    return (
        <div className={styles.postComponentCntr}>
            <section>
                <PostComponent submitHandler={newPost} />
            </section>
            <section className='app-posts'>
                <PostListComponent posts={posts} />
            </section>
        </div>
    )
}
