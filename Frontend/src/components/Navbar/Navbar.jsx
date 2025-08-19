import React, { useContext, useState, useEffect } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { useNavigate, useLocation } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import { motion } from 'framer-motion';

const Navbar = ({ setShowLogin }) => { 
    const [menu, setMenu] = useState("home");
    const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        setMenu(location.pathname.substring(1) || "home");
    }, [location.pathname]);

    const logout = () => {
        localStorage.removeItem("token");
        setToken("");
        navigate("/");
    };

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
        <motion.div 
            className='navbar'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            <img 
                src={assets.logo} 
                alt="Logo" 
                className="logo" 
                onClick={() => navigate("/")} 
                style={{ cursor: "pointer" }}
            />
            <ul className="navbar-menu">
                <li onClick={() => navigate("/")} className={menu === "home" ? "active" : ""}>Home</li>
                <li onClick={handleMenuClick} className={menu === "menu" ? "active" : ""}>Menu</li>
                <li onClick={() => navigate("/about")} className={menu === "about" ? "active" : ""}>About</li>
                <li onClick={() => navigate("/blog")} className={menu === "blog" ? "active" : ""}>Blog</li>
                <li onClick={() => navigate("/contact")} className={menu === "contact" ? "active" : ""}>Contact Us</li>
            </ul>

            <div className="navbar-right">
                <img src={assets.search_icon} alt="Search Icon" />
                <div className="navbar-search-icon">
                    <img 
                        src={assets.basket_icon} 
                        alt="Cart Icon" 
                        onClick={() => navigate("/cart")} 
                        style={{ cursor: "pointer" }}
                    />
                    <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
                </div>

                {!token ? 
                    <button onClick={() => setShowLogin(true)}>Sign in</button>
                : 
                    <div className='navbar-profile'>
                        <img src={assets.profile_icon} alt="Profile Icon" />
                        <ul className="nav-profile-dropdown">
                            <li onClick={() => navigate('/myorders')}>
                                <img src={assets.bag_icon} alt="Orders Icon" />
                                <p>Orders</p>
                            </li>
                            <hr />
                            <li onClick={logout}>
                                <img src={assets.logout_icon} alt="Logout Icon" />
                                <p>Logout</p>
                            </li>
                        </ul>
                    </div>
                }
            </div>
        </motion.div>
    );
};

export default Navbar;
