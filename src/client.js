import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const container = document.getElementById('app');
const isInitialRender = true;
const renderReactApp = isInitialRender ? ReactDOM.hydrate : ReactDOM.render;
let appInstance;
appInstance = renderReactApp(<App>{'Hello Reactor'}</App>, container);
