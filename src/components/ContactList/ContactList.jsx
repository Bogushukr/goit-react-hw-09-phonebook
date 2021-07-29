import { TransitionGroup, CSSTransition } from 'react-transition-group';
import React from 'react';
import PropTypes from 'prop-types';
import { List } from '@material-ui/core';

import ContactItem from 'components/ContactListItem';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  contacts: {
    padding: '10px',
    marginTop: '10px',
    boxShadow:
      '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
  },
  list: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridGap: '5px',
  },
});

const ContactList = ({ contacts, contactListRef, onDelete }) => {
  const classes = useStyles();

  if (!contacts.length) {
    return null;
  }

  return (
    <section id="contacts" className={classes.contacts} ref={contactListRef}>
      <TransitionGroup component={List} className={classes.list}>
        {contacts.map(({ id, name, number }) => {
          const contactItemRef = React.createRef();
          return (
            <CSSTransition
              key={id}
              timeout={250}
              appear={true}
              nodeRef={contactItemRef}
            >
              <ContactItem
                name={name}
                number={number}
                cssRef={contactItemRef}
                onDelete={() => onDelete(id)}
              />
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </section>
  );
};

ContactList.defaultProps = { contacts: [] };

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ContactList;
