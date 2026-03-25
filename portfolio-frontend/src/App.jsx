import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Admin from './pages/Admin';
import AdminLogin from './pages/AdminLogin';
import Navbar from './components/Navbar';
import './App.css';

function App() {
    return (
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </>
    );
}

export default App;