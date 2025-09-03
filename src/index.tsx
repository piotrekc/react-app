import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
 //strict mode means React 18 each component will render twice (Only in DEV mode)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

