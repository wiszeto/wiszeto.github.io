import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import Blog from './Pages/Blog'; // Make sure this path is correct
import Shop from './Pages/Shop'; // Make sure this path is correct
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/blog" element={<Blog />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/" element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>
);


reportWebVitals();
