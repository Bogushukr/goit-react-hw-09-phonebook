import React from 'react';
import ReactDOM from 'react-dom';

import 'modern-normalize/modern-normalize.css';
import 'common.css';

import ReduxStoragePersist from 'redux/ReduxStoragePersist';
import Application from 'Application';

ReactDOM.render(
  <React.StrictMode>
    <ReduxStoragePersist>
      <Application />
    </ReduxStoragePersist>
  </React.StrictMode>,
  document.getElementById('root'),
);
