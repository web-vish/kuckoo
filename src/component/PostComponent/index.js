import { Button } from '@msvp/react-lib';
import React, { useState } from 'react';

export default function PostComponent({ submitHandler }) {
    const [newpost, setPosts] = useState('')
    return (
        <form className='app-form'>
            <textarea placeholder='What are you thinking?' onChange={(e) => setPosts(e.target.value)}></textarea>
            <Button type='button' onClick={() => submitHandler({ id: Math.floor(Math.random() * 101), userId: Math.floor(Math.random() * 101), title: newpost.slice(0, 30), body: newpost })}>Post</Button>
            <button type='button' className='btn' onClick={() => submitHandler({ id: Math.floor(Math.random() * 101), userId: Math.floor(Math.random() * 101), title: newpost.slice(0, 30), body: newpost })}>Post</button>
        </form>
    )
}
