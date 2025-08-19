import React, { useState } from 'react';
import './ReserveBlock.css';
import '../../css/stylesheet.css';
import bgImage from '../../assets/bg_blue.jpg'; 
import { useNavigate, useLocation } from 'react-router-dom';
import '../Navbar/Navbar.css';

const ReserveBlock = () => {
    const navigate = useNavigate();
    const location = useLocation();
    
    return (
        <div>
            <div className="reserve_block_hp"  style={{ background: `url(${bgImage})`, marginTop: '50px' }} >
                <div className="container-fluid" >
                    <div className="row">
                        <div className="col reserve_block_in_hp">
                            <div className="reserve_middle_hp">
                                <a  onClick={() => navigate("/contact")}
                                    className={location.pathname === "/contact" ? "active" : ""}>
                                    <div className="reserve_img_hp">
                                        <img src="images/icon_img1.png" alt="" />
                                    </div>
                                    <div className="reserve_title_hp">
                                        RESERVE A TABLE
                                    </div>
                                </a>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>
                <div className="clearfix"></div>
            </div>
        </div>
    );
};

export default ReserveBlock;
