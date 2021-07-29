import axios from 'api/axios-instance';
import { contactsActions } from 'redux/contacts';

const fetchListOfContacts = () => async dispatch => {
  try {
    dispatch(contactsActions.fetchListOfContactsRequest());
    const { data } = await axios.get('/contacts');
    dispatch(contactsActions.fetchListOfContactsSuccess(data));
  } catch (error) {
    dispatch(contactsActions.fetchListOfContactsError(error.message));
  }
};

const addContact = (name, number) => async dispatch => {
  try {
    dispatch(contactsActions.addContactRequest());
    const { data } = await axios.post('/contacts', {
      name,
      number,
    });
    dispatch(contactsActions.addContactSuccess(data));
  } catch (error) {
    dispatch(contactsActions.addContactError(error.message));
  }
};

const deleteContact = contactId => async dispatch => {
  try {
    dispatch(contactsActions.deleteContactRequest());
    await axios.delete(`/contacts/${contactId}`);
    dispatch(contactsActions.deleteContactSuccess(contactId));
  } catch (error) {
    dispatch(contactsActions.deleteContactError(error.message));
  }
};
const contactsOperations = {
  fetchListOfContacts,
  addContact,
  deleteContact,
};
export default contactsOperations;
