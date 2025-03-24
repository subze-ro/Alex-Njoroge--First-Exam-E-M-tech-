import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import Dashboard from './pages/Dashboard';
import UserDetails from './pages/UserDetails';

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/user/:userId" element={<UserDetails />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;