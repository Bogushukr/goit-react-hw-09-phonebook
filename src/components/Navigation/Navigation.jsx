import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import routes from 'routes';

const useStyles = makeStyles({
  box: {
    display: 'grid',
    alignItems: 'center',
    gridTemplateColumns: 'repeat(2, auto)',
    justifyContent: 'center',
    width: 'auto',
    boxShadow:
      '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
    borderRadius: '50px',
    backgroundColor: '#3F51B5',
       '&:hover': {
      backgroundColor: 'white',
    },
  },
  link: {
    color: 'white',
    '&:hover': {
      color: '#3F51B5',
      fontWeight: 600,
    },
  },
  link_current: {
    fontWeight: 600,
    color: 'white',
  },
});

export default function Navigation() {
  const classes = useStyles();
  const isLoggedIn = useSelector(authSelectors.getIsLogged);
  return (
    <Box component="div" className={classes.box}>
      <Button color="primary" className={classes.button}>
        <NavLink
          exact
          className={classes.link}
          to={routes.home}
          activeClassName={classes.link_current}
        >
          Main
        </NavLink>
      </Button>
      {isLoggedIn && (
        <Button color="primary" className={classes.button}>
          <NavLink
            exact
            className={classes.link}
            to={routes.contacts}
            activeClassName={classes.link_current}
          >
            Contacts
          </NavLink>
        </Button>
      )}
    </Box>
  );
}