import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux';
import store from './redux-store/index.jsx';
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
// npm install react-redux
// npm install @reduxjs/toolkit