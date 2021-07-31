import React from 'react';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';


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
      <div ref={notifyRef}>
        <p>{message}</p>
      </div>
    </CSSTransition>,
    place,
  );
};

export default Notification;
