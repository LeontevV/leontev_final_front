import React, { useEffect, memo } from 'react';
import {
  useDispatch, useSelector,
} from 'react-redux';
import { useNavigate } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';

import { toggleModal, logOut, getUserByToken } from '../../redux/action';
import cat from '../../assets/cat.png';

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isUserLogin = useSelector((state) => state.auth.isUserLogin);
  const currentUser = useSelector((state) => state.user.user);
  const openModal = (type) => {
    dispatch(toggleModal({ status: true, type }));
  };
  const logOutUser = (value) => { dispatch(logOut(value)); };

  const avatarClick = () => { navigate(`/users/${currentUser.id}`); };
  const handleClick = () => { window.location.href = '/'; };

  useEffect(() => {
    dispatch(getUserByToken());
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography onClick={handleClick} style={{ cursor: 'pointer' }} variant="h6" sx={{ flexGrow: 1 }}>
            News Site
          </Typography>
          {!isUserLogin && (
          <>
            <Button onClick={() => openModal('login')} color="inherit">Login</Button>
            <Button onClick={() => openModal('signUp')} color="inherit">Sign Up</Button>
          </>
          )}
          {isUserLogin && (
          <>
            <Avatar onClick={avatarClick} style={{ cursor: 'pointer' }} src={cat} />
            <Button onClick={logOutUser} color="inherit">Logout</Button>
          </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default memo(Header);
