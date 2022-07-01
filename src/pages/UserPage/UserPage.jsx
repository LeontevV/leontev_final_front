import React, { useEffect, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

import Card from '../../components/Card/Card';
import { getUserById } from '../../redux/action';
import Notification from '../../components/Error/Error';
import cat from '../../assets/cat.png';
import './UserPage.css';

function UserPage() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const currentUser = useSelector((state) => state.user.user);
  const error = useSelector((state) => state.user.error);
  const isFetching = useSelector((state) => state.user.isFetching);
  const isUserLogin = useSelector((state) => state.auth.isUserLogin);

  useEffect(() => {
    dispatch(getUserById(id));
  }, []);

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
    <div className="userPage">
      <div className="userInformation">
        <img src={cat} alt="" />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {currentUser.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {currentUser.email}
          </Typography>
        </CardContent>
        {isUserLogin && (
          <>
            <Button size="small">Edit</Button>
            <Button size="small">Add News</Button>
          </>
        )}
      </div>
      <div className="news">
        {currentUser?.posts?.map((post) => (
          <Card
            key={post.id}
            title={post.title}
            description={post.description}
            tag={post.tag}
            user={post.user}
          />
        ))}

      </div>
    </div>
  );
}

export default memo(UserPage);
