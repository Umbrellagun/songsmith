import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import * as firebase from "firebase/app";
import "firebase/analytics";

import 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const firebaseConfig = {
  apiKey: "AIzaSyB9whekWvW9lpMMA-dVhye8uqvblmvn7DA",
  authDomain: "songsmith-7042e.firebaseapp.com",
  databaseURL: "https://songsmith-7042e.firebaseio.com",
  projectId: "songsmith-7042e",
  storageBucket: "songsmith-7042e.appspot.com",
  messagingSenderId: "1063643902090",
  appId: "1:1063643902090:web:075022e9a24f57ff4dbd73",
  measurementId: "G-XER074S67Z"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
