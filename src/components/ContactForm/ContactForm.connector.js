import { connect } from 'react-redux';
import ContactForm from './ContactForm';

import { contactsActions } from 'redux/contacts';
import { contactsOperations, contactsSelectors } from 'redux/contacts';

const mapStateToProps = state => ({
  items: contactsSelectors.getContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onSave: (name, number) =>
    dispatch(contactsOperations.addContact(name, number)),
  setNotify: value => dispatch(contactsActions.showExistNotify(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
