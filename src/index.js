import React from 'react';
import ReactDOM from 'react-dom';
import initialize from './assets/js/main.js';

import './assets/css/style.css';
import './assets/css/customize.css';

import Routes from './routes';
import registerServiceWorker from './registerServiceWorker';

const firebaseConfig = {
  apiKey: "AIzaSyDZGrRwhDa0CGxA9mYF835Vb8y4V0el3Ik",
  authDomain: "popup-react.firebaseapp.com",
  databaseURL: "https://popup-react.firebaseio.com",
  projectId: "popup-react",
  storageBucket: "popup-react.appspot.com",
  messagingSenderId: "200835351251",
  appId: "1:200835351251:web:8be66c5779037913fe0a26",
  measurementId: "G-QS59J34QH7"
};

var firebase = require('firebase');
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
initialize();
