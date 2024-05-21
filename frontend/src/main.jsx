import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { StoreContextProvider } from 'src/components/Context/StoreContext.jsx';

import { StrictMode } from 'react'; // Add this line

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode> {/* Wrap the content with StrictMode */}
    <BrowserRouter>
      <StoreContextProvider>
        <App />
      </StoreContextProvider>
    </BrowserRouter>
  </StrictMode>
);
