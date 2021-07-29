import { connect } from 'react-redux';

import Filter from './Filter';
import { contactsActions } from 'redux/contacts';
import { contactsSelectors } from 'redux/contacts';

const mapStateToProps = state => ({
  contacts: contactsSelectors.getContacts(state),
  filter: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: event => {
    const filter = event.currentTarget.value;
    dispatch(contactsActions.setContactsFilter(filter));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
