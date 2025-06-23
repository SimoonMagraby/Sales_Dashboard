import React from 'react'

import '../App.css'

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
                <button className="responsive-menu-close" onClick={toggleSidebar}>
                    ☰
                </button>
                
                
                <div className="logo">
                    <div className="logo-sign">D</div>
                    {isOpen && <h1>Dagank</h1>}
                </div>
            
            <div className="menu-list">
                <a href='#' className='menu-item'>
                    <DashboardOutlinedIcon sx={{color:'white'}} />
                    
                    {isOpen && <h2>Overview</h2>}
                    
                </a>
                <a href='#' className='menu-item'>
                    <FavoriteBorderOutlinedIcon sx={{color:'white'}}  />
                    {isOpen && <h2>Trending</h2>}
                </a>
                <a href='#' className='menu-item'>
                    <DescriptionOutlinedIcon sx={{color:'white'}} />
                    {isOpen && <h2>Spreadsheet</h2>}
                </a>
                <a href='#' className='menu-item'>
                    <LocalPostOfficeOutlinedIcon sx={{color:'white'}} />
                    {isOpen && <h2>Message</h2>}
                </a>
                <a href='#' className='menu-item'>
                    <CalendarTodayOutlinedIcon sx={{color:'white'}} />
                    {isOpen && <h2>Schedule</h2>}
                </a>
                <a href='#' className='menu-item'>
                    <LeaderboardOutlinedIcon sx={{color:'white'}} />
                    {isOpen && <h2>Leaderboard</h2>}
                </a>
                <a href='#' className='menu-item'>
                    <PeopleOutlinedIcon sx={{color:'white'}} />
                    {isOpen &&  <h2>Community</h2>}
                </a>
                <a href='#' className='menu-item'>
                    <SettingsOutlinedIcon sx={{color:'white'}} />
                    {isOpen && <h2>Settings</h2>}
                </a>
                
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