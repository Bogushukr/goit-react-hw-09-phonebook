import { CSSTransition } from 'react-transition-group';
import React, { useEffect } from 'react';
import { Box } from '@material-ui/core';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import { contactsOperations } from 'redux/contacts';


import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles({
  container: {
    display: 'block',
    maxWidth: '550px',
    margin: 'auto',
  },
});

export default function ContactsView() {
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(contactsOperations.fetchListOfContacts());
  }, [dispatch]);

  const contactListRef = React.createRef();

  return (
    <>
      <Box className={classes.container}>
        <ContactForm />
        <Filter />
        <CSSTransition
          in={true}
          appear={true}
          timeout={250}
          nodeRef={contactListRef}
          unmountOnExit
        >
          <ContactList contactListRef={contactListRef} />
        </CSSTransition>
      </Box>
    </>
  );
}