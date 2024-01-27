import React from 'react';
import Header from '../components/Header';
import BarChart from '../components/BarChartBox';
import { Link } from 'react-router-dom';
import {boxTick,positiveSL,negativeSL,trendUp,trendDwn,rotateIcon } from '../assets/assets';
import { Sparklines, SparklinesLine } from 'react-sparklines'
import OrdersTable from '../components/OrdersTable';

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
          <div className='order-details'>
            {/* ---------- */}
           <div className='stat-box'>
              <div className='stat-box-top'>
                <div className='box-tick-box'>
                  <img src={boxTick}/>
                </div>
                <div className='box-tick-box'>
                  <img src={positiveSL}/>
                </div>
              </div>
              <div className='stat-box-middle'>
                <h4>Total Order</h4>
                <h3>350</h3>
              </div>
              <div className='stat-box-btm'>
                <button className='positive-btn'>
                <img src={trendUp}/>
                <span>23.5%</span>
                </button>

                <span>vs. previous month</span>
              </div>
           </div>
            {/* ---------- */}
            <div className='stat-box'>
              <div className='stat-box-top'>
                <div className='box-tick-box'>
                  <img src={rotateIcon}/>
                </div>
                <div className='box-tick-box'>
                  <img src={negativeSL}/>
                </div>
              </div>
              <div className='stat-box-middle'>
                <h4>Total Refund</h4>
                <h3>270</h3>
              </div>
              <div className='stat-box-btm'>
                <button className='negative-btn'>
                <img src={trendDwn}/>
                <span>23.5%</span>
                </button>

                <span>vs. previous month</span>
              </div>
           </div>
            {/* ---------- */}
            <div className='stat-box'>
              <div className='stat-box-top'>
                <div className='box-tick-box'>
                  <img src={boxTick}/>
                </div>
                <div className='box-tick-box'>
                  <img src={positiveSL}/>
                </div>
              </div>
              <div className='stat-box-middle'>
                <h4>Total Order</h4>
                <h3>350</h3>
              </div>
              <div className='stat-box-btm'>
                <button>
                <img src={trendUp}/>
                <span>23.5%</span>
                </button>

                <span>vs. previous month</span>
              </div>
           </div>
            {/* ---------- */}
            <div className='stat-box'>
              <div className='stat-box-top'>
                <div className='box-tick-box'>
                  <img src={boxTick}/>
                </div>
                <div className='box-tick-box'>
                  <img src={positiveSL}/>
                </div>
              </div>
              <div className='stat-box-middle'>
                <h4>Total Order</h4>
                <h3>350</h3>
              </div>
              <div className='stat-box-btm'>
                <button>
                <img src={trendUp}/>
                <span>23.5%</span>
                </button>

                <span>vs. previous month</span>
              </div>
           </div>

          </div>
          <div className='top-platform'><h2>Top platforms</h2></div>
        </div>
      </main>
    </div>
  )
}

export default Dashboard