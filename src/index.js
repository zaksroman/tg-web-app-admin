import React from 'react';
import ReactDOM from 'react-dom/client';
import styles from './index.module.css';
import App from './App';
import {Provider} from "react-redux";
import store from './Store'
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <React.StrictMode>
          <BrowserRouter>
              <Provider store={store}>
                  <App />
              </Provider>
          </BrowserRouter>
      </React.StrictMode>

);


