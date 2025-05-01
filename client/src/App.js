// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
// import { AuthProvider } from './context/AuthContext';

// import Navbar from './components/Navbar';
// import Sidebar from './components/Sidebar';
// import Home from './pages/Home';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import Dashboard from './pages/Dashboard';
// import HealthDetails from './pages/HealthDetails';
// import DietPlan from './pages/DietPlan';
// import LogMeal from './pages/LogMeal';
// import CalorieTracker from './pages/CalorieTracker';
// import AdminLogin from './pages/AdminLogin';
// import AdminDashboard from './pages/AdminDashboard';

// const App = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

//   return (
//     <AuthProvider>
//       <Router>
//         <div className="App">
//           <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
//           <div className="content-area">
//             {isSidebarOpen && <Sidebar />}
//             <div className="content-area"> 
//               <Routes> 
//                 <Route path="/login" element={<Login />} />
//                 <Route path="/register" element={<Register />} />
//                 <Route path="/dashboard" element={<Dashboard />} />
//                 <Route path="/health-details" element={<HealthDetails />} />
//                 <Route path="/diet-plan" element={<DietPlan />} />
//                 <Route path="/log-meal" element={<LogMeal />} />
//                 <Route path="/track-calories" element={<CalorieTracker />} />
//                 <Route path="/" element={<Home />} />
//               </Routes>
//             </div>
//           </div>
//         </div>
//       </Router>
//     </AuthProvider>
//   );
// };

// export default App;


import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import HealthDetails from './pages/HealthDetails';
import DietPlan from './pages/DietPlan';
import LogMeal from './pages/LogMeal';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import AdminHealth from './pages/AdminHealth';
import AboutUs from './pages/AboutUs';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <AuthProvider>
      <Router>
        <div className="App">
          {/* Show Navbar & Sidebar only for user routes */}
          <Routes>
            <Route
              path="/*"
              element={
                <>
                  <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
                  <div className="content-area">
                    {isSidebarOpen && <Sidebar />}
                    <div className="content-area">
                      <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/health-details" element={<HealthDetails />} />
                        <Route path="/diet-plan" element={<DietPlan />} />
                        <Route path="/log-meal" element={<LogMeal />} />
                        <Route path="/About-us" element={<AboutUs />} />
                      </Routes>
                    </div>
                  </div>
                </>
              }
            />

            {/* Admin routes */}
            <Route path="/admins/login" element={<AdminLogin />} />
            <Route path="/admins/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/healthdetails/:userId" element={<AdminHealth />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
