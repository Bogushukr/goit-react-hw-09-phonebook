import React from 'react';
import { Grid, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

import Navigation from 'components/Navigation';
import AuthNavigation from 'components/AuthNavigation';
import UserMenu from 'components/UserMenu';

const useStyles = makeStyles({
  header: {
    borderBottom: '1px solid #3F51B5',
    marginBottom: '20px',
  },
  grid: {
    justifyContent: 'space-between',
    padding: '5px 0',
  },
});

const AppBar = () => {
  const classes = useStyles();

  const isLoggedIn = useSelector(authSelectors.getIsLogged);

  return (
    <header className={classes.header}>
      <Container fixed>
        <Grid container className={classes.grid}>
          <Grid item xs={12} sm={'auto'}>
            <Navigation />
          </Grid>
          <Grid item xs={12} sm={'auto'}>
            {isLoggedIn ? <UserMenu /> : <AuthNavigation />}
          </Grid>
        </Grid>
      </Container>
    </header>
  );
};

export default AppBar;