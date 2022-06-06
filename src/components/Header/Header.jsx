import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { CardMedia } from '@mui/material';
import news from '../../assets/news1.png';

export default function ButtonAppBar() {
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
          <Button color="inherit">Registation</Button>
          <Button color="inherit">Sign Up</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
