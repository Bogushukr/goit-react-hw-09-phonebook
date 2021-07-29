import { Component } from 'react';
import { Container, Button, Grid, TextField } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import EmailRounded from '@material-ui/icons/EmailRounded';

import Security from '@material-ui/icons/Security';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import styles from './RegisterView.module.css';

class RegisterView extends Component {
  state = { name: '', password: '', email: '', showPassword: false };

  onChangeInputsHandler = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  togglePasswordVisible = () => {
    this.setState(prev => ({ showPassword: !prev.showPassword }));
  };

  prventEventPasswordVisible = event => {
    event.preventDefault();
  };

  onSubmitHandler = event => {
    event.preventDefault();
    const { name, email, password } = this.state;
    const { register } = this.props;
    register({ name, email, password });
    this.onResetInputsHandler();
  };

  onResetInputsHandler = () => {
    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, password, email, showPassword } = this.state;

    return (
      <section id="register">
        <Container fixed className={styles.container}>
          <form className={styles.form} onSubmit={this.onSubmitHandler}>
            <Grid container spacing={2} alignItems="flex-end">
              <Grid item xs={1}>
                <AccountCircle />
              </Grid>
              <Grid item xs={11}>
                <TextField
                  className={styles.input}
                  type="text"
                  label="Name"
                  name="name"
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="The name can only consist of letters, apostrophes, dashes and spaces. for example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan etc."
                  onChange={this.onChangeInputsHandler}
                  value={name}
                  required
                />
              </Grid>
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
                  Sign Up
                </Button>
              </Grid>
            </Grid>
          </form>
        </Container>
      </section>
    );
  }
}

export default RegisterView;
