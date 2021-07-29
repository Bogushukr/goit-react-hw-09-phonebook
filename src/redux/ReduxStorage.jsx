import { Provider } from 'react-redux';

import * as store from 'redux/store';

const ReduxStorage = ({ children }) => {
  return <Provider store={store.vault}>{children}</Provider>;
};

export default ReduxStorage;
