import React, {useState,useEffect} from 'react'
import Sidebar from './component/Sidebar'
import Topbar from './component/Topbar'
import "./index.css"
import Overview from './pages/Overview'
import {Routes, Route } from 'react-router-dom';

import Trending from './pages/Trending';
import Spreadsheet from './pages/Spreadsheet'





const App = () => {
  const [isOpen, setIsOpen] = useState(true);
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1215) {
        setIsOpen(false);
      } 
      else {
        setIsOpen(true);
      }
    };

    handleResize(); 

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);




  return (
    <div className='app'>
      <Sidebar isOpen={isOpen} toggleSidebar={() => setIsOpen(!isOpen)}/>
      <main className='content'>
        <Topbar toggleSidebar={() => setIsOpen(!isOpen)}/>
       
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/spreadsheet" element={<Spreadsheet />} />
      </Routes>
      </main>
       
    </div>
  )
}



export default App


