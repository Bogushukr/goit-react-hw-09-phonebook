import { Component } from 'react';
import { Container, Button, Grid, TextField } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import EmailRounded from '@material-ui/icons/EmailRounded';
import Security from '@material-ui/icons/Security';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import styles from './LoginView.module.css';

class LoginView extends Component {
  state = { password: '', email: '', showPassword: false };

  togglePasswordVisible = () => {
    this.setState(prev => ({ showPassword: !prev.showPassword }));
  };

  prventEventPasswordVisible = event => {
    event.preventDefault();
  };

  onChangeInputsHandler = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  onSubmitHandler = event => {
    event.preventDefault();
    const { email, password } = this.state;
    const { logIn } = this.props;
    logIn({ email, password });
    this.onResetInputsHandler();
  };

  onResetInputsHandler = () => {
    this.setState({ email: '', password: '' });
  };

  render() {
    const { password, email, showPassword } = this.state;
    return (
      <section id="login">
        <Container fixed className={styles.container}>
          <form className={styles.form} onSubmit={this.onSubmitHandler}>
            <Grid
              container
              spacing={2}
              alignItems="flex-end"
              className={styles.field}
            >
              <Grid item xs={1}>
                <EmailRounded />
              </Grid>
              <Grid item xs={11}>
                <TextField
                  className={styles.input}
                  type="email"
                  label="E-mail"
                  name="email"
                  onChange={this.onChangeInputsHandler}
                  value={email}
                  required
                />
              </Grid>
              <Grid item xs={1}>
                <Security />
              </Grid>
              <Grid item xs={11}>
                <TextField
                  className={styles.input}
                  type={showPassword ? 'text' : 'password'}
                  label="Password"
                  name="password"
                  onChange={this.onChangeInputsHandler}
                  value={password}
                  required
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label=""
                          onClick={this.togglePasswordVisible}
                          onMouseDown={this.prventEventPasswordVisible}
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
                  className={styles.button}
                  type="submit"
                >
                  Sign In
                </Button>
              </Grid>
            </Grid>
          </form>
        </Container>
      </section>
    );
  }
}

export default LoginView;
