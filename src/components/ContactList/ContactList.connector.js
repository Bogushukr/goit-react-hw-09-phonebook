import { connect } from 'react-redux';

import ContactList from './ContactList';

import { contactsOperations, contactsSelectors } from 'redux/contacts';

const mapStateToProps = state => ({
  contacts: contactsSelectors.getFilteredContactList(state),
});

const mapDispatchToProps = dispatch => ({
  onDelete: value => dispatch(contactsOperations.deleteContact(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
