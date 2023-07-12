import React from 'react'

export default function PostListComponent({ posts }) {
    return posts.map((post) => {
        return (
            <article key={post.id + "_" + post.userId}>
                <p className='userid'>@user_{post.userId}</p>
                <h2 className='title'>{post.title}</h2>
                <p className='postBody'>{post.body}</p>
            </article>)
    })
}
