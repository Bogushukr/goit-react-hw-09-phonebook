import React from 'react';

import { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Container, Button, Grid, TextField } from '@material-ui/core';

import {
  contactsActions,
  contactsOperations,
  contactsSelectors,
} from 'redux/contacts';

import styles from './ContactForm.module.css';

export default function ContactForm() {
  const dispatch = useDispatch();

  const items = useSelector(contactsSelectors.getContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onChangeInputsHandler = useCallback(event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  }, []);

  const onSubmitHandler = useCallback(
    event => {
      event.preventDefault();
      const findContact = contactName =>
        items.find(({ name }) => name === contactName);
      if (findContact(name)) {
        dispatch(contactsActions.showNotify(`${name} is already in contacts.`));
        return;
      }
      dispatch(contactsOperations.addContact(name, number));
      onResetInputsHandler();
    },
    [dispatch, items, name, number],
  );

  const onResetInputsHandler = () => {
    setName('');
    setNumber('');
  };

  return (
    <section id="contact" className={styles.contact}>
      <Container fixed className={styles.container}>
        <form onSubmit={onSubmitHandler}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                className={styles.input}
                type="text"
                name="name"
                label="Name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                 title="The name can only consist of letters, apostrophes, dashes and spaces. for example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan etc."
                onChange={onChangeInputsHandler}
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
                onChange={onChangeInputsHandler}
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