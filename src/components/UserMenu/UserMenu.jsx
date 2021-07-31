import React from 'react';
import { Box, Button, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from 'redux/auth';

const useStyles = makeStyles(theme => ({
  box: {
    display: 'grid',
    alignItems: 'center',
    gridTemplateColumns: 'repeat(3, auto)',
    gridGap: '10px',
    justifyContent: 'center',
    width: 'auto',
    
  },
  controls: {
    display: 'grid',
    'align-items': 'baseline',
    'grid-template-columns': 'repeat(2, auto)',
    'grid-gap': '10px',
  },
  name: { 'font-weight': 700 },
  avatar: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
}));

export default function UserMenu() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const name = useSelector(authSelectors.getUserName);
  const email = useSelector(authSelectors.getUserEmail);

  const logOutBtnClickHandler = useCallback(
    () => dispatch(authOperations.logOut()),
    [dispatch],
  );

  return (
    <Box component="div" className={classes.box}>
      <Avatar src={''} className={classes.avatar} alt="Avatar" />
      <Box component="div" className={classes.controls}>
        <span className={classes.name}>
          {email} ({name})
        </span>
        <Button color="primary" onClick={logOutBtnClickHandler}>
          Sign Out
        </Button>
      </Box>
    </Box>
  );
}