import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Store } from './redux/Store.js';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import { Toaster } from 'react-hot-toast';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Toaster />
    <Provider store={Store}>
      <App />
    </Provider>
  </BrowserRouter>
);


