import { createAction } from '@reduxjs/toolkit';
import types from './contacts-types';

const fetchListOfContactsRequest = createAction(types.FETCH_LIST_REQUEST);
const fetchListOfContactsSuccess = createAction(types.FETCH_LIST_SUCCESS);
const fetchListOfContactsError = createAction(types.FETCH_LIST_ERROR);

const addContactRequest = createAction(types.ADD_REQUEST);
const addContactSuccess = createAction(types.ADD_SUCCESS);
const addContactError = createAction(types.ADD_ERROR);

const deleteContactRequest = createAction(types.DELETE_REQUEST);
const deleteContactSuccess = createAction(types.DELETE_SUCCESS);
const deleteContactError = createAction(types.DELETE_ERROR);

const setContactsFilter = createAction(types.FILTER);

const showNotify = createAction(types.NOTIFY_SHOW);
const hideNotify = createAction(types.NOTIFY_HIDE);

const contactsActions = {
  fetchListOfContactsRequest,
  fetchListOfContactsSuccess,
  fetchListOfContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  setContactsFilter,
  showNotify,
  hideNotify,
};
export default contactsActions;