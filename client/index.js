'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import { Main } from './reactComponents';
import { Provider } from 'react-redux';
import store from './store';
import {socket} from './socket';



ReactDOM.render(
  <Provider store={store} >
    <Main />
  </Provider>,
  document.getElementById('app')
);
