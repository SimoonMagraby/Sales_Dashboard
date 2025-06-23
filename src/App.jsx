import React, {useState,useEffect} from 'react'
import Sidebar from './component/Sidebar'
import Topbar from './component/Topbar'
import "./index.css"

import Overview from './pages/Overview'
import Trending from './pages/Trending'




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
        <Overview />
        
        
      </main>
       
    </div>
  )
}



export default App


