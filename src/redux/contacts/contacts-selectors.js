import { createSelector } from 'reselect';

const getContacts = state => state.contacts.items;
const getFilter = state => state.contacts.filter;
const getLoading = state => state.contacts.loading;
const getNotify = state => state.contacts.notify;

const getNotifyState = state => {
  const notify = getNotify(state);
  return notify.state;
};
const getNotifyMessage = state => {
  const notify = getNotify(state);
  return notify.message;
};

const getFilteredContactList = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const search = filter.trim().toLowerCase();
    return contacts.filter(
      ({ name }) => name.toLowerCase().indexOf(search) >= 0,
    );
  },
);

const selectors = {
  getContacts,
  getFilter,
  getLoading,
  getNotify,
  getNotifyState,
  getNotifyMessage,
  getFilteredContactList,
};
export default selectors;
