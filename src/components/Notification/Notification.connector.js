import { connect } from 'react-redux';

import Notification from './Notification';
import { contactsSelectors } from 'redux/contacts';

const mapStateToProps = state => ({
  message: contactsSelectors.getNotifyMessage(state),
  isNotify: contactsSelectors.getNotifyState(state),
});

export default connect(mapStateToProps, null)(Notification);
