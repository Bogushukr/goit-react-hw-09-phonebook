import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import contactsReducer from 'redux/contacts/contacts-reducers';

const persistContactsConfig = {
  key: 'phone-book',
  storage,
  blacklist: ['filter', 'notify', 'loading'],
};

export default persistReducer(persistContactsConfig, contactsReducer);
