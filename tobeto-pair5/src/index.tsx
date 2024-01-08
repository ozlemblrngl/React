import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import store from './App/store/store';

import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  // Context
  <AuthProvider>
    {/* Redux */}
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </AuthProvider>,
  document.getElementById("root")
);

reportWebVitals();