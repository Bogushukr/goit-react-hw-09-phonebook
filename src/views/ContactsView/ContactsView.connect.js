import { connect } from 'react-redux';

import ContactsView from './ContactsView';

import { contactsOperations } from 'redux/contacts';

const mapDispatchToProps = dispatch => ({
  contactsFetch: () => dispatch(contactsOperations.fetchListOfContacts()),
});

export default connect(null, mapDispatchToProps)(ContactsView);
