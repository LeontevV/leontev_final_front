import React, { useEffect, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CircularProgress from '@mui/material/CircularProgress';

import Card from '../../components/Card/Card';
import { getPosts } from '../../redux/action';
import Notification from '../../components/Error/Error';

import './MainPage.css';

function Posts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const posts = useSelector((state) => state.posts.posts);
  const error = useSelector((state) => state.posts.error);
  const isFetching = useSelector((state) => state.posts.isFetching);

  if (isFetching) {
    return <CircularProgress className="loading" />;
  }

  if (error) {
    return (
      <Notification
        severity="error"
        title="УПС!"
        text={error}
      />
    );
  }

  return (
    <div className="news">
      {!error && posts.length === 0
        ? (
          <Notification
            severity="warning"
            title="ОЙ!"
            text="А новостей, то нет!"
          />
        )
        : (posts.map((post) => (
          <Card
            key={post.id}
            title={post.title}
            description={post.description}
            tag={post.tag}
            user={post.user}
          />
        )))}
    </div>
  );
}

export default memo(Posts);
