import React from 'react';
import ReactDOM from 'react-dom'; // 'react-dom' modülünü doğrudan import edin
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { configureStore } from './store/configureStore';
import { BrowserRouter as Router } from 'react-router-dom'; // BrowserRouter'ı ekleyin

const store = configureStore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
);

reportWebVitals();
