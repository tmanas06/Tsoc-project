import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './routes/Main';
import Login from './routes/Login';
import Register from './routes/Register';
import Dashboard from './routes/Dashboard';
import BusinessRegistration from './routes/BusinessRegistration';
import ProductLaunch from './routes/ProductLaunch';
import SalespersonDashboard from './routes/SalespersonDashboard';
import Leaderboard from './routes/Leaderboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/business-registration" element={<BusinessRegistration />} />
        <Route path="/product-launch" element={<ProductLaunch />} />
        <Route path="/salesperson-dashboard" element={<SalespersonDashboard />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </Router>
  );
}

export default App;
