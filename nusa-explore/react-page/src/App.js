// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Login from './pages/Login';
// import SignIn from './pages/SignIn';
// import Home from './pages/Home';

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route 
//             path="/" 
//             element={<Navigate to={isAuthenticated ? "/home" : "/login"} />} 
//           />
//           <Route 
//             path="/home" 
//             element={isAuthenticated ? <Home /> : <Navigate to="/login" />} 
//           />
//           <Route 
//             path="/login" 
//             element={<Login setIsAuthenticated={setIsAuthenticated} />} 
//           />
//           <Route 
//             path="/signin" 
//             element={<SignIn setIsAuthenticated={setIsAuthenticated} />} 
//           />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import LandingPage from './pages/LandingPage';
import Destination from './pages/Destination';
import DestinationDetail from './pages/DestinationDetail';
import Reviews from './pages/Reviews';
import Trending from './pages/Trending';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/landingpage" element={<LandingPage />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/destination/:id" element={<DestinationDetail />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/signin" element={<SignIn setIsAuthenticated={setIsAuthenticated} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
