import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import LandingPage from './pages/LandingPage';
import Destination from './pages/Destination';
import DestinationDetail from './pages/DestinationDetail';
import Reviews from './pages/Reviews';
import Trending from './pages/Trending';
import Settings from './pages/Settings';
import Unauthorized from './pages/Unauthorized';
import RoleChecker from './components/RoleChecker';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/landingpage" element={<RoleChecker element={<LandingPage />} allowedRoles={['superadmin','admin', 'user']} />} />
          <Route path="/destination" element={<RoleChecker element={<Destination />} allowedRoles={['superadmin','admin', 'user']} />} />
          <Route path="/destination/:id" element={<RoleChecker element={<DestinationDetail />} allowedRoles={['superadmin','admin', 'user']} />} />
          <Route path="/reviews" element={<RoleChecker element={<Reviews />} allowedRoles={['superadmin','admin', 'user']} />} />
          <Route path="/trending" element={<RoleChecker element={<Trending />} allowedRoles={['superadmin','admin', 'user']} />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
