import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '../public/css/style.css'
import { HashRouter, BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
)
