import React from 'react'

import '../App.css'
import { Link } from 'react-router-dom';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import LocalPostOfficeOutlinedIcon from '@mui/icons-material/LocalPostOfficeOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';  
import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';




const Sidebar = ({ isOpen , toggleSidebar}) =>{
    

    return(
    <div className={`Sidebar ${isOpen ? 'open' : 'collapsed'}`}>
        
        <div className='menu'>
            
            <div className="sidebar-top">
                
                <div className="logo">
                    <div className="logo-sign">D</div>
                    {isOpen && <h1>Dagank</h1>}
                    
                </div>
            {isOpen &&
                <button className="responsive-menu-close" onClick={toggleSidebar}>
                    ☰
                </button>}
            <div className="menu-list">
                 {!isOpen &&
                <button className="responsive-menu-close" onClick={toggleSidebar}>
                    ☰
                </button>}
                <Link to="/" className='menu-item'>
                    <DashboardOutlinedIcon sx={{color:'white'}} />
                    
                    {isOpen && <h2>Overview</h2>}
                    
                </Link>
                <Link to="/trending" className='menu-item'>
                    <FavoriteBorderOutlinedIcon sx={{color:'white'}}  />
                    {isOpen && <h2>Trending</h2>}
                </Link>
                <Link to="/spreadsheet" className='menu-item'>
                    <DescriptionOutlinedIcon sx={{color:'white'}} />
                    {isOpen && <h2>Spreadsheet</h2>}
                </Link>
                <Link to="/" className='menu-item'>
                    <LocalPostOfficeOutlinedIcon sx={{color:'white'}} />
                    {isOpen && <h2>Message</h2>}
                </Link>
                <Link to="/" className='menu-item'>
                    <CalendarTodayOutlinedIcon sx={{color:'white'}} />
                    {isOpen && <h2>Schedule</h2>}
                </Link>
                <Link to="/" className='menu-item'>
                    <LeaderboardOutlinedIcon sx={{color:'white'}} />
                    {isOpen && <h2>Leaderboard</h2>}
                </Link>
                <Link to="/" className='menu-item'>
                    <PeopleOutlinedIcon sx={{color:'white'}} />
                    {isOpen &&  <h2>Community</h2>}
                </Link>
                <Link to="/" className='menu-item'>
                    <SettingsOutlinedIcon sx={{color:'white'}} />
                    {isOpen && <h2>Settings</h2>}
                </Link>
                
            </div>
            </div>
            
            <a href='#' className='logout'>
                <LogoutOutlinedIcon sx={{color:'white'}} />
                {isOpen && <h2>Logout</h2>}
            </a>
            

        </div>
    </div>
    

    )
}
export default Sidebar;