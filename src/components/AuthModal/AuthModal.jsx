import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { toggleModal } from '../../redux/action';

export default function modalWindow() {
  const dispatch = useDispatch();
  const modalIsOpen = useSelector((state) => state.auth.modalIsOpen);
  const modalType = useSelector((state) => state.auth.modalType);

  const isLogin = modalType === 'login';

  const handleClose = () => {
    dispatch(toggleModal({ status: false }));
  };

  return (
    <div>
      <Dialog open={modalIsOpen} onClose={handleClose}>
        <DialogTitle>{isLogin ? 'Login' : 'Sign Up'}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          {!isLogin && (
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="email"
            fullWidth
            variant="standard"
          />
          )}
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
