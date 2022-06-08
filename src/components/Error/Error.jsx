import React, { memo } from 'react';
import { string } from 'prop-types';

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

function Notification({ severity, title, text }) {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity={severity}>
        <AlertTitle>{title}</AlertTitle>
        { text }
      </Alert>
    </Stack>
  );
}
Notification.propTypes = {
  severity: string,
  title: string,
  text: string,
};
Notification.defaultProps = {
  severity: '',
  title: '',
  text: '',
};
export default memo(Notification);
