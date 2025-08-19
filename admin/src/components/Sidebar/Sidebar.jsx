import React from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebar-options">
                <NavLink to="/add" className="sidebar-option">
                    <img src={assets.add_icon} alt="" />
                    <p>Add Items</p>
                </NavLink>
                <NavLink to="/list" className="sidebar-option">
                    <img src={assets.list_icon} alt="" />
                    <p>List Items</p>
                </NavLink>
                <NavLink to="/orders" className="sidebar-option">
                    <img src={assets.order_icon} alt="" />
                    <p>Orders</p>
                </NavLink>
                <NavLink to="/contacts" className="sidebar-option">
                    <img src={assets.chat} alt="" />
                    <p>Contact Submissions</p>
                </NavLink>
                <NavLink to="/admin" className="sidebar-option">
                    <img src={assets.admin_icon} alt="" />
                    <p>Admin Dashboard</p>
                </NavLink>
            </div>
        </div>
    )
}

export default Sidebar
