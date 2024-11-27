import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import './style/Navbar.css';

const App = () => {
    return (
        <Router>
            <div>
                {/* Navigation Bar */}
                <nav className="navbar">
                    <h2 className="logo">Cafe Bliss</h2>
                    <div className="nav-links">
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact</Link>
                    </div>
                </nav>
                <hr />
                
                {/* Routes */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/contact" element={<Contact/>} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
