import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Fade from '@material-ui/core/Fade';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';
import { removeNotification } from '../redux/actions/notificationAction';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    textAlign: 'center',
    backgroundColor: theme.palette.background.paper,
    borderRadius: '10px',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4, 6, 3, 6),
  },
}));

export default function Notification() {

  const classes = useStyles();

  const notification = useSelector(state => state.Notification.notification)

  const [open, setOpen] = useState(notification.open);

  const dispatch = useDispatch()

      useEffect(() => {
        if(notification.open){
            handleOpen()
        }
    }, [notification.open])

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
      setTimeout(() => {
        dispatch(removeNotification())
      }, 200);
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <p id="transition-modal-description" style={{fontSize: '19px'}}>{notification.text}</p>
            <button
              onClick={handleClose}
              className="dark-btn" style={{margin: '20px 0 0 0'}}>تایید
            </button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}