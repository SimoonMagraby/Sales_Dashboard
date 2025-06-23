import React from 'react'


import MostPopularItems from '../component/PopularProduct'

import BarChart from '../component/BarChar'
import RecentOrders from '../component/RecentOrders'

import RevenueCard from '../component/RevenueCard'

const Overview = () => {
  return (
    <div className='ovr-content'>
        <div className="ovr-content-column-2">
          <div id="shop-details">
            <div className="shop-det-row1">
              <img src='src/assets/image.png' id='shop-icon'></img>
              <h2>Oden Mart</h2>
            </div>
            <div className="shop-det-row2">
              <div className="shop-det-col"><h4>400</h4><h5>product</h5></div>
              <div className="shop-det-col"><h4>12 Years</h4><h5>Experience</h5></div>
              <div className="shop-det-col"><h4>4.8</h4><h5>Rating</h5></div>
            </div>
          </div>
          <div id="recent-orders">
            <RecentOrders />
          </div>
        </div>
        <div className='ovr-content-column-1'>
            <div className='ovr-content-column-1-row-1'>
              <RevenueCard name="Sales" number={2000} compNumber={100} />
              <RevenueCard name="Purchases" number={1500} compNumber={100} />
              <RevenueCard name="Marketing" number={300} compNumber={100}/>
              <RevenueCard name="Return" number={200} compNumber={100}/>
            </div>
            <div id='barchart'>
              <BarChart />
            </div>
            <div id="productlist">
              <MostPopularItems />
            </div>
            
        </div>
        
        
        
    </div>
    

  )
}

export default Overview
