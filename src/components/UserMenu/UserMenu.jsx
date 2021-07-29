import React from 'react';
import { Box, Button, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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

const UserMenu = ({ name, email, logoutHandler }) => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.box}>
      <Avatar src={''} className={classes.avatar} alt="Avatar" />
      <Box component="div" className={classes.controls}>
        <span className={classes.name}>
          {email} ({name})
        </span>
        <Button color="primary" onClick={logoutHandler}>
          Sign Out
        </Button>
      </Box>
    </Box>
  );
};

export default UserMenu;
