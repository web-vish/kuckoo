import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.scss';
import PostComponent from './component/PostComponent';
import PostListComponent from './component/PostListComponent';

function App() {

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
    <div className="App">
      <div className='app-container'>
        <section>
          <PostComponent submitHandler={newPost} />
        </section>
        <section className='app-posts'>
          <PostListComponent posts={posts} />
        </section>
      </div>
    </div>
  );
}

export default App;
