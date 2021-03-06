import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './app/App';
import './app/AppErrorBoundary.scss';
import configureStore from './store/index';
import './index.scss';

const store = configureStore(window.PRELOADED_STATE);
const app = (
  <BrowserRouter>
    <App
      store={store}
      />
  </BrowserRouter>
);

hydrate(app, document.getElementById('root'));
