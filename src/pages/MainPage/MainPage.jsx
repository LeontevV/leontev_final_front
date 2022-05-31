import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import CircularProgress from '../../components/Spinner/';


import CircularProgress from '@mui/material/CircularProgress';

import Card from '../../components/Card/Card';
import { getPosts } from '../../redux/action';
import Notification from '../../components/Error/Error';



const Posts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const {
    posts,
    error,
    isFetching,
  } = useSelector((state) => state.posts);
  
  if (isFetching) {
    return <CircularProgress />;
  }
  
  if (error) {
    <Notification
    severity="error" title="УПС!"
    text="Отсутствует подключение!"
    />;
  }

  return (
    <div>
      { posts.length === 0
      ? <Notification severity="warning" title="ОЙ!"
          text="А новостей, то нет!"
        />
      : 
     ( posts.map((post) => (
        <Card
          key={ post.id }
          title={ post.title}  
        description={ post.description }
        tag={ post.tag }
        />
        )))
      }
    </div>
   )

};


export default Posts;