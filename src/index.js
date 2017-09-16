import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {Provider} from 'mobx-react';
//import store from './stores';
import BridStore from './stores/brid_store';

ReactDOM.render(
  <Provider BridStore={BridStore}>
    <App />
  </Provider>,

document.getElementById('root'));
registerServiceWorker();
