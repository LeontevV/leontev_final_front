import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import CircularProgress from '../../components/Spinner/Spinner';



import Card from '../../components/Card/Card';
import { getPosts } from '../../redux/action';



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
    // <CircularProgress />
    // тут можно добавить <Spinner/>
    // или без return прямо в jsx {isPostsFetching && <Spinner/>}
    return 'Loading...';
  }
  
  if (error) {
    console.error(error);
  }

  return posts.map((post) => (

    <Card key={post.id} title={post.title} />

  ));

};


export default Posts;