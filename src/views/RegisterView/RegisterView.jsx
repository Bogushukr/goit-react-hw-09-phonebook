import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Button, Grid, TextField } from '@material-ui/core';
import { authOperations } from 'redux/auth';

import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import EmailRounded from '@material-ui/icons/EmailRounded';

import Security from '@material-ui/icons/Security';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    boxShadow:
      '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
    padding: '10px 20px',
borderRadius: '20px',
  },

  form: {
    minWidth: '100%',
  },

  input: {
    width: '100%',
  },

  button: {
    width: '100%',
    textTransform: 'capitalize',
  },
});

export default function RegisterView() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [showPassword, setPasswordVisibility] = useState(false);

  const onChangeInputsHandler = useCallback(event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  }, []);

  const togglePasswordVisible = useCallback(() => {
    setPasswordVisibility(prev => !prev);
  }, []);

  const prventEventPasswordVisible = useCallback(event => {
    event.preventDefault();
  }, []);

  const onSubmitHandler = useCallback(
    event => {
      event.preventDefault();
      dispatch(authOperations.register({ name, email, password }));
      onResetInputsHandler();
    },
    [dispatch, name, email, password],
  );

  const onResetInputsHandler = () => {
    setName('');
    setEmail('');
    setPassword('');
    setPasswordVisibility(false);
  };

  return (
    <section id="register">
      <Container fixed className={classes.container}>
        <form className={classes.form} onSubmit={onSubmitHandler}>
          <Grid container spacing={2} alignItems="flex-end">
            <Grid item xs={1}>
              <AccountCircle />
            </Grid>
            <Grid item xs={11}>
              <TextField
                className={classes.input}
                type="text"
                label="Name"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                onChange={onChangeInputsHandler}
                value={name}
                required
              />
            </Grid>
            <Grid item xs={1}>
              <EmailRounded />
            </Grid>
            <Grid item xs={11}>
              <TextField
                className={classes.input}
                type="email"
                label="E-mail"
                name="email"
                onChange={onChangeInputsHandler}
                value={email}
                required
              />
            </Grid>
            <Grid item xs={1}>
              <Security />
            </Grid>
            <Grid item xs={11}>
              <TextField
                className={classes.input}
                type={showPassword ? 'text' : 'password'}
                label="Password"
                name="password"
                onChange={onChangeInputsHandler}
                value={password}
                autoComplete="true"
                required
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label=""
                        onClick={togglePasswordVisible}
                        onMouseDown={prventEventPasswordVisible}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                className={classes.button}
                type="submit"
              >
                Sign Up
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </section>
  );
}