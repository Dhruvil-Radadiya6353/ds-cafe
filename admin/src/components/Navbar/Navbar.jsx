import React from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { useAuth } from '../../context/AuthContext';

const Navbar = () => {
  const { logout } = useAuth();
  return (
    <div className='navbar'>
      <div className='logo-container'>
        <img className='logo' src={assets.logo} alt="Logo" />
        <p className='logo-text'>Admin panel</p>
      </div>
      <button className="logout-btn" onClick={logout}>Logout</button>
    </div>
  );
};

export default Navbar;
