import express from 'express';
import App from './components/App';
import Html from './components/Html';
import React from 'react';
import ReactDOM from 'react-dom/server';

process.on('unhandledRejection', (reason, p) => {
  console.error('Unhandled Rejection at:', p, 'reason:', reason);
  // send entire app down. Process manager will restart it
  process.exit(1);
});

const app = express();

app.get('*', (req, res, next) => {
  const data = {
    title: 'Hello Reactor',
    children: ReactDOM.renderToString(
      <App>{'Hello Reactor'}</App>,
    )
  };
  const html = ReactDOM.renderToStaticMarkup(<Html {...data} />);
  res.status(200).send(`<!doctype html>${html}`);
});

export default app;
