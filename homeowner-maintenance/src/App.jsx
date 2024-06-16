// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homeowner from './components/Homeowner';
import ServiceDetails from './components/ServiceDetails';
import './App.css';

const App = () => {
    return (
        <Router>
            <div className="app">
                <Routes>
                    <Route path="/" element={<Homeowner />} />
                    <Route path="/service/:id" element={<ServiceDetails />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;