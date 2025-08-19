import React from 'react';
import './Header.css';

const Header = () => {
  const handleMenuClick = () => {
    if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
            document.getElementById("explore-menu")?.scrollIntoView({ behavior: "smooth" });
        }, 100); 
    } else {
        document.getElementById("explore-menu")?.scrollIntoView({ behavior: "smooth" });
    }
    setMenu("menu");
};

  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>Welcome to our food ordering platform! Browse our diverse menu, from tantalizing appetizers to mouthwatering entrees. Order your favorites with ease and convenience. Enjoy delicious meals delivered right to your doorstep!</p>
        <button onClick={handleMenuClick}>View Menu</button>
      </div>
    </div>
  );
};

export default Header;