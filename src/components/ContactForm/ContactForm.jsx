import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Button, Grid, TextField } from '@material-ui/core';

import styles from './ContactForm.module.css';

class ContactForm extends Component {
  static propTypes = {
    onSave: PropTypes.func.isRequired,
    setNotify: PropTypes.func.isRequired,
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  state = { name: '', number: '' };

  timer = null;

  onChangeInputsHandler = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  findContact = contactName =>
    this.props.items.find(({ name }) => name === contactName);

  onSubmitHandler = event => {
    event.preventDefault();
    const { name, number } = this.state;
    const { onSave, setNotify } = this.props;
    if (this.findContact(name)) {
      setNotify({ state: true, message: `${name} is already in contacts.` });
      this.timer = setTimeout(() => {
        setNotify({
          state: false,
        });
      }, 2000);
      return;
    }
    onSave(name, number);
    this.onResetInputsHandler();
  };

  onResetInputsHandler = () => {
    this.setState({ name: '', number: '' });
  };

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    const { name, number } = this.state;
    return (
      <section id="contact" className={styles.contact}>
        <Container fixed className={styles.container}>
          <form onSubmit={this.onSubmitHandler}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  className={styles.input}
                  type="text"
                  name="name"
                  label="Name"
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="The name can only consist of letters, apostrophes, dashes and spaces. for example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan etc."
                  onChange={this.onChangeInputsHandler}
                  value={name}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className={styles.input}
                  type="tel"
                  name="number"
                  label="Number"
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  onChange={this.onChangeInputsHandler}
                  value={number}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  className={styles.button}
                  type="submit"
                  size="large"
                >
                  Add contact
                </Button>
              </Grid>
            </Grid>
          </form>
        </Container>
      </section>
    );
  }
}

export default ContactForm;
