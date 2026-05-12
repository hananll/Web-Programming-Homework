import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PizzaAxios from './PizzaAxios'; 
import Calculator from './components/Calculator';

const Navbar = () => (
  <nav style={{ background: '#222', padding: '1rem', display: 'flex', gap: '20px' }}>
    <Link to="/" style={{color: 'white'}}>Home</Link>
    <Link to="/calculator" style={{color: 'white'}}>Calculator</Link>
    <Link to="/crud" style={{color: 'white'}}>Axios CRUD</Link>
  </nav>
);

function App() {
  return (
    <Router>
      <Navbar /> {/* Menü burada sabit, asla kaybolmaz */}
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<h1>Pizza Admin Dashboard</h1>} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/crud" element={<PizzaAxios />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;