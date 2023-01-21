import React from 'react';
import ReactDOM from 'react-dom/client';
import io from 'socket.io-client';
import Application from './components/application.js';
import './index.css';

global.socket = io.connect('wss://chessgame-prod-mmm-4nug91.mo2.mogenius.io');
global.hash = undefined;
global.from = undefined;
global.to = undefined;
global.promotion = 0;
const main = ReactDOM.createRoot(document.getElementById('Main'));
//const application = new Application();
//main.render(application.render());
main.render(
  <React.StrictMode>
    <Application />

  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
