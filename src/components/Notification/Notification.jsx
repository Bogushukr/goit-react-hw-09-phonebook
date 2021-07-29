import React from 'react';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import styles from 'components/Notification/Notification.module.css';

const place = document.querySelector('#notify');

const Notification = ({ message, isNotify }) => {
  const notifyRef = React.createRef();
  return createPortal(
    <CSSTransition
      in={isNotify}
      timeout={250}
      nodeRef={notifyRef}
      unmountOnExit
    >
      <div className={styles.Notification} ref={notifyRef}>
        <p>{message}</p>
      </div>
    </CSSTransition>,
    place,
  );
};

export default Notification;
