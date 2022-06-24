import React, { memo } from 'react';
import { useSelector } from 'react-redux';

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import LoginForm from '../LoginForm/LoginForm';

function modalWindow() {
  const modalIsOpen = useSelector((state) => state.auth.modalIsOpen);
  const modalType = useSelector((state) => state.auth.modalType);

  const isLogin = modalType === 'login';

  return (
    <div>
      <Dialog open={modalIsOpen}>
        <DialogTitle>{isLogin ? 'Login' : 'Sign Up'}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <LoginForm />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default memo(modalWindow);
