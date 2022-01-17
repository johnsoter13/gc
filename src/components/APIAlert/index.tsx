import * as React from 'react';
import { ALERT_TYPES } from '@/types';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

type APIAlertProps = {
  type: keyof typeof ALERT_TYPES;
  callback: () => void;
  message: string;
} 

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function APIAlert(props: APIAlertProps) {
  const [open, setOpen] = React.useState(true);

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
    
    if (props?.callback) {
      props?.callback();
    }
  };

  return (
    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={props.type} sx={{ width: '100%' }}>
        {props.message}
      </Alert>
    </Snackbar>
  );
}