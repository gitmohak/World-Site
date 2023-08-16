/* An important React file for rendering the Application.
React Router - to create links in the website */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
      <App />
    </BrowserRouter>

  </React.StrictMode>
);