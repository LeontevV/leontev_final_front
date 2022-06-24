import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';

import { toggleModal, logOut } from '../../redux/action';

function ButtonAppBar() {
  const dispatch = useDispatch();
  const isUserLogin = useSelector((state) => state.auth.isUserLogin);
  const openModal = (type) => {
    dispatch(toggleModal({ status: true, type }));
  };
  const logOutUser = (value) => { dispatch(logOut(value)); };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
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
            <Avatar />
            <Button onClick={logOutUser} color="inherit">Logout</Button>
          </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default memo(ButtonAppBar);
