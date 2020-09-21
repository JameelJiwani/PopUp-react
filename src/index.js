import React from 'react';
import ReactDOM from 'react-dom';
import initialize from './assets/js/main.js';

import './assets/css/style.css';
import './assets/css/customize.css';

import Routes from './routes';
import registerServiceWorker from './registerServiceWorker';

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};

var firebase = require('firebase');
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
initialize();
