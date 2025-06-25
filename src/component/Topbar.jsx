import React from 'react'
import '../App.css'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import { useMediaQuery } from '@mui/material';
import { useLocation } from 'react-router-dom';


const Topbar = ({toggleSidebar}) =>{
    const location = useLocation();
    const today = new Date().toLocaleDateString();
    const isMobile = useMediaQuery('(max-width:425px)');

    const getPageTitle = (pathname) => {
    switch (pathname) {
      case '/':
        return 'Overview';
      case '/trending':
        return 'Trending';
      case '/spreadsheet':
        return 'Spreadsheet';
      default:
        return 'Page';
    }
  };

    return (
    
    <div className="topbar-container">
        <div className="topbar-left">
                <h2>{getPageTitle(location.pathname)}</h2>
                <p id='date'>{today}</p>
            
            
            
        </div>
        
        <div className="topbar-right">
            {isMobile && <button className="toggle-btn" onClick={toggleSidebar}>
                            ☰
                </button>}
            <div className='search-box'>
                
                <IconButton>
                    <SearchOutlinedIcon sx={{color:'white'}} />
                </IconButton>
                <InputBase id='search-input'placeholder='Search Something'></InputBase>
                
            </div>
            <IconButton>
                <NotificationsOutlinedIcon sx={{color:'white'}} />
            </IconButton>
            <div id='profile-img'></div>
        </div>
        
    </div>
    )
}
export default Topbar;