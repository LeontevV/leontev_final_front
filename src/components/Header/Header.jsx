import React, { memo } from 'react';
import { useDispatch } from 'react-redux';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { CardMedia } from '@mui/material';

import { toggleModal } from '../../redux/action';
import news from '../../assets/news.png';

function ButtonAppBar() {
  const dispatch = useDispatch();

  const openModal = (type) => {
    dispatch(toggleModal({ status: true, type }));
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <CardMedia
            image={news}
          />
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            News Site
          </Typography>
          <Button onClick={() => openModal('login')} color="inherit">Login</Button>
          <Button onClick={() => openModal('signUp')} color="inherit">Sign Up</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default memo(ButtonAppBar);
