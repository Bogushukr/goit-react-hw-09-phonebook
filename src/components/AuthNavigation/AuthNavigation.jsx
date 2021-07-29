import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import routes from 'routes';

const useStyles = makeStyles({
  box: {
    display: 'grid',
    alignItems: 'center',
    gridTemplateColumns: 'repeat(3, auto)',
    gridGap: '10px',
    justifyContent: 'center',
    width: 'auto',
  },
  link: {
    color: 'black',
    '&:hover': {
      color: 'black',
    },
  },
  link_current: {
    fontWeight: 600,
    color: '#3F51B5',
  },
});

const AuthNavigation = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.box}>
      <Button color="primary" className={classes.button}>
        <NavLink
          exact
          className={classes.link}
          to={routes.register}
          activeClassName={classes.link_current}
        >
          Sign Up
        </NavLink>
      </Button>

      <Button color="primary" className={classes.button}>
        <NavLink
          exact
          className={classes.link}
          to={routes.login}
          activeClassName={classes.link_current}
        >
          Sign In
        </NavLink>
      </Button>
    </Box>
  );
};

export default AuthNavigation;
