import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import './styles/index.scss';
import reportWebVitals from './reportWebVitals';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router>
          <Header />
          <Sidebar />
          <Routes>
              <Route path="/" element={<Navigate to="/home"/>} />
              <Route path="/home" element={<Home />} />
              <Route path="/:switcher/:id" element={<Dashboard />} />
              <Route path="/settings" element={<div className="element">ROUTE SETTINGS</div>} />
              <Route path="/community" element={<div className="element">ROUTE COMMUNITY</div>} />
              <Route path="*" element={<div className="element">ERROR 404</div>} />
          </Routes>
      </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
