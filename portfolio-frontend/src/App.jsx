import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Admin from './pages/Admin';
import AdminLogin from './pages/AdminLogin';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />

        {/* Login Page */}
        <Route path="/admin-login" element={<AdminLogin />} />
          
        {/* Protected Admin Route */}
        <Route 
          path="/admin"             
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </>
  );
}

export default App;