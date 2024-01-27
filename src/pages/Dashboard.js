import React from 'react';
import Header from '../components/Header';
import BarChart from '../components/BarChartBox';
import { Link } from 'react-router-dom';
import OrdersTable from '../components/OrdersTable';
import OrderStats from '../components/OrderStats';

const Dashboard = () => {

  return (
    <div className='dashboard'>
      <Header />

      <main className='db-main-flex'>
        <div className='db-main-left'>
          <div className='sales-trend'>
            <h2>Sales Trends</h2>
            <div className='chart-box'>
              <BarChart />
            </div>
          </div>
          <div className='last-orders'>
            <div className='lo-flex'>
              <h2>Last Orders</h2>
              <Link to='/see-all'>See All</Link>
            </div>
            {/* Table */}

            <OrdersTable />
          </div>
        </div>

        <div className='db-main-right'>
          <OrderStats />
          <div className='top-platform'><h2>Top platforms</h2>
            <div className='tp-box'>
            <div class="tps">
							<div class="tp-box">
								<b class="tp-text">Book Bazaar</b>
								<div class="tp-layout">
									<div class="tp-filled bb">
									</div>
								</div>
                <div className='pp-flex'>
                <span class="">$2,500,000</span>
										<span class="tooltip">+15%</span>
                </div>
							</div>	
              <div class="tp-box">
								<b class="tp-text">Artisan Aisle</b>
								<div class="tp-layout">
									<div class="tp-filled aa">
									</div>
								</div>
                <div className='pp-flex'>
                <span class="">$1,800,000</span>
										<span class="tooltip">+10%</span>
                </div>
							</div>	
              <div class="tp-box">
								<b class="tp-text">Toy Troop</b>
								<div class="tp-layout">
									<div class="tp-filled tt">
									</div>
								</div>
                <div className='pp-flex'>
                <span class="">$1,200,000</span>
										<span class="tooltip">+8%</span>
                </div>
							</div>	
              <div class="tp-box">
								<b class="tp-text">XStore</b>
								<div class="tp-layout">
									<div class="tp-filled xt">
									</div>
								</div>
                <div className='pp-flex'>
                <span class="">$1,000,000</span>
										<span class="tooltip">+5%</span>
                </div>
							</div>	
						</div>

            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Dashboard