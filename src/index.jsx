import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ModoDarkContextProvider from './context/ModoDarkContext';
import FavsContextProvider from './context/FavsContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <FavsContextProvider>
      <ModoDarkContextProvider>
        <App />
      </ModoDarkContextProvider>
    </FavsContextProvider>
  </React.StrictMode>
);


